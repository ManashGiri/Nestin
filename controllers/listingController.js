const cloudinary = require('cloudinary');
const Listing = require("../models/listing.js");
const NodeGeocoder = require("node-geocoder");
const initdata = require("../init/data.js");

const isProduction = process.env.NODE_ENV === "production";
const refererURL = isProduction ? "https://nestin-wnne.onrender.com/listings" : "http://localhost:8080/listings";

module.exports.init = async (req, res) => {
    const count = await Listing.countDocuments({});
    if (count === 0) {
        await Listing.deleteMany({});
        for (let info in initdata.data) {
            const geocoder = NodeGeocoder({
                provider: 'openstreetmap',
            });
            let response = await geocoder.geocode(initdata.data[info].location);
            console.log(initdata.data[info].title);
            let geometry = {
                type: "Point",
                coordinates: [
                    response[0].longitude,
                    response[0].latitude,
                ],
            }
            let users = ["682c8399428fbcdb5492da0b", "682c83b6428fbcdb5492da12", "682c845613e82aa667929785"];
            let randomUser = users[Math.floor(Math.random() * users.length)];
            initdata.data[info].owner = randomUser;
            initdata.data[info].geometry = geometry;
            console.log(initdata.data[info].geometry.coordinates);
        }
        await Listing.insertMany(initdata.data);
        console.log("data was initialized");
        req.flash("success", "Nests Initialized!");
        res.redirect("/listings");
    } else {
        req.flash("error", "Only admins have permission to do this!");
        res.redirect("/listings");
    }
}

module.exports.search = async (req, res) => {
    let allListings;
    if (isNaN(req.body.search)) {
        let search = req.body.search;
        search = search.toLowerCase().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        allListings = await Listing.find({
            $or: [{
                country: search
            }, {
                location: search
            }, {
                title: search
            },
            {
                description: search
            }, {
                category: search
            },
            ]
        });
    } else {
        allListings = await Listing.find({
            price: req.body.search
        });
    }
    res.render("listings/index.ejs", { allListings });
    // res.send("reached");
}

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.new = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.show = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({
        path: "reviews",
        populate: { path: "author" },
    }).populate("owner");
    if (!listing) {
        req.flash("error", "Nest doesn't exists!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.create = async (req, res, next) => {
    let listing = req.body.listing;
    console.log(listing);
    const geocoder = NodeGeocoder({
        provider: 'openstreetmap',
        fetch: async (url, options = {}) => {
            const modifiedOptions = {
                ...options,
                headers: {
                    ...options.headers,
                    'User-Agent': 'Nestin/1.0 (503manashsvjc@gmail.com)',
                    'Referer': refererURL,
                }
            };

            return fetch(url, modifiedOptions);
        }

    });
    const response = await geocoder.geocode(listing.location);
    const geometry = {
        type: "Point",
        coordinates: [
            response[0].longitude,
            response[0].latitude,
        ],
    }

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = geometry;
    await newListing.save();
    req.flash("success", "New Nest Created!");
    res.redirect("/listings");
}

module.exports.edit = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Nest doesn't exists!");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
}

module.exports.update = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Nest Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroy = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (listing.image && listing.image.filename) {
        await cloudinary.uploader.destroy(listing.image.filename);
    }
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Nest Deleted!");
    res.redirect("/listings");
}