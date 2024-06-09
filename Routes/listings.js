const express = require('express');
const routes = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const Listing = require('../models/listing.js');
const Review = require('../models/review.js');
const { listingSchema } = require('../schema.js');
const flash = require('connect-flash');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { isLoggedIn, isOwner } = require('../middleware.js');
const User = require("../models/user.js");
const multer = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });

const mbxGeoCoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geoCodingClient = mbxGeoCoding({ accessToken: mapToken });

const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    console.log(error);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

routes.get('/', wrapAsync(async (req, res) => {
    const dataList = await Listing.find({});
    res.render("listing/index.ejs", { dataList });
})
);

//New Route
routes.get('/new', isLoggedIn, (req, res, next) => {
    res.render("listing/new.ejs");
});

// Post request after Creating new Listing
routes.post('/', isLoggedIn, upload.single("image"), validateListing, wrapAsync(async (req, res) => {
    // geocoding with proximity
    const response = await geoCodingClient.forwardGeocode({
        query: req.body.Location + " " + req.body.Country,
        limit: 1,
    }).send();
    const geometry = response.body.features[0].geometry;

    const url = req.file.path;
    const filename = req.file.filename;
    const { title, Description, image, price, Location, Country } = req.body;
    const newData = await Listing.insertMany({ title: title, desc: Description, image: { url, filename }, price: price, location: Location, country: Country, owner: req.user._id, geometry: geometry});
    console.log(newData);
    req.flash("success", "New Listing Created!");
    res.redirect('/listing');
})
);

// Get request of edit Listing
routes.get('/:id/edit', isLoggedIn, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listingData = await Listing.findById(id);
    if (!listingData) {
        req.flash("error", "Listing you are trying to access does not exist");
        res.redirect('/listing');
    } else {
        const originalImage = listingData.image.url.replace('/upload', '/upload/');
        res.render('listing/edit.ejs', { listingData, originalImage });
    }
})
);

// Put method to update Data
routes.put('/:id', isLoggedIn, isOwner, upload.single("image"), validateListing, wrapAsync(async (req, res) => {
    if (typeof req.file !== "undefined") {
        const url = req.file.path;
        const filename = req.file.filename;
        const { id } = req.params;
        const { title, Description, image, price, Location, Country } = req.body
        const editData = await Listing.findByIdAndUpdate({ _id: id }, { $set: { title: title, desc: Description, image: { url, filename }, price: price, location: Location, country: Country } });
        req.flash("success", "Listing Updated!");
        res.redirect(`/listing/${id}`);
    } else {
        const { id } = req.params;
        const { title, Description, image, price, Location, Country } = req.body
        const editData = await Listing.findByIdAndUpdate({ _id: id }, { $set: { title: title, desc: Description, image: image, price: price, location: Location, country: Country } });
        req.flash("success", "Listing Updated!");
        res.redirect(`/listing/${id}`);
    }
})
);

// // Show listing in detail
routes.get('/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const IdList = await Listing.findById(id).populate("owner");

    if (!IdList) {
        req.flash("error", "Listing you are trying to access does not exist");
        res.redirect('/listing');
    } else {
        const allReviews = IdList.reviews;
        const revList = await Review.find({ _id: { $in: allReviews } }).populate("author");
        res.render("listing/show.ejs", { IdList, revList });
    }
}));

// Delete Query
routes.delete('/:id', isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const confirmDelete = req.query.confirmDelete;
    console.log(req.url);
    if (confirmDelete === 'true') {
        const deletedData = await Listing.findByIdAndDelete(id);
        console.log(deletedData);
        req.flash("success", "Listing Deleted Successfully!");
        res.redirect('/listing');
    } else {
        res.redirect(`/listing/${id}`);
    }
})
);

module.exports = routes;


