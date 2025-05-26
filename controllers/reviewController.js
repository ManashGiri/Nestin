const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.create = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "Review Created!");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.edit = async (req, res) => {
    let { id, reviewId } = req.params;
    req.session.rId = reviewId;
    const review = await Review.findById(reviewId);
    if(!review) {
       req.flash("error", "Review doesn't exists!");
       res.redirect(`/listings/${id}`);
    }
    res.render("listings/reviewEdit.ejs", { id, review });
}

module.exports.update = async (req, res) => {
    let { id } = req.params;
    // req.body.review.comment += "\n(edited)";
    await Review.findByIdAndUpdate(req.session.rId, { ...req.body.review });
    req.flash("success", "Review Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroy = async (req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
}