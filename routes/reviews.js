const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isAuthor, validateReview} = require("../middleware.js");
const reviewController = require("../controllers/reviewController.js");

// Review - Post Route
router.post("/:id/reviews/", isLoggedIn, validateReview, wrapAsync(reviewController.create));

// Review - Edit Route
router.get("/:id/reviews/:reviewId/edit", isLoggedIn, isAuthor, wrapAsync(reviewController.edit));

// Review - Update Route
router.post("/:id", isLoggedIn, isAuthor, validateReview, wrapAsync(reviewController.update));

// Review - Delete Route
router.delete("/:id/reviews/:reviewId", isLoggedIn, isAuthor, wrapAsync(reviewController.destroy));

module.exports = router;