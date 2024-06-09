const express = require('express');
const routes = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const { reviewsSchema } = require('../schema.js');
const ExpressError = require('../utils/ExpressError.js');
const Review = require('../models/review.js');
const Listing = require('../models/listing.js');
const {isLoggedIn,isOwner,isOwnerReview} = require('../middleware.js');

const validateReview = (req, res, next) => {
    const { error } = reviewsSchema.validate(req.body);
    console.log(error);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Post Reviews
routes.post('/', isLoggedIn,validateReview, wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created!");
    res.redirect(`/listing/${listing._id}`);
})
);

// Delete Reviews
routes.delete('/:reviewId',isOwnerReview, wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted Successfully!");
    res.redirect(`/listing/${id}`);
})
);

module.exports = routes;
