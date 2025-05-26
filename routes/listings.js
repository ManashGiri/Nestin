const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listingController.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

// Initialize Route

router
    .route("/init")
    .get(wrapAsync(listingController.init)
);

// Search Route 
router
    .route("/search")
    .post(wrapAsync(listingController.search)
);

// Listing - Index Route & Create Route
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.create)
);

// Listing - New Route
router.get("/new", isLoggedIn, listingController.new);

// Listing - Show Route, Update Route & Destroy Route
router
    .route("/:id")
    .get( wrapAsync(listingController.show))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.update))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroy)
);

// Listing - Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.edit));

module.exports = router;