const Listing = require('./models/listing.js');
const Review = require('./models/review.js');

module.exports.isLoggedIn = (req, res, next) => {
    console.log(req.user);
    if (!req.isAuthenticated()) {
        req.flash("error", "You must first logged in.");
        return res.redirect('/login');
    } else {
        next();
    }
}

// module.exports.isLoggedInReview = (req, res, next) => {
//     console.log(req.user);
//     if (!req.isAuthenticated()) {
//         req.flash("error", "You must first logged in.");
//         return res.redirect('/login');
//     } else {
//         next();
//     }
// }

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    console.log("Owner: " + listing.owner);
    console.log("User: " + req.user._id);
    if (!listing.owner.equals(req.user._id) ) {
        req.flash('error', "Access Denied: You do not have permission.");
        return res.redirect(`/listing/${id}`);
    } else {
    next();
    }
};
module.exports.isOwnerReview = async (req, res, next) => {
    const { id,reviewId } = req.params;
    const listing = await Listing.findById(id);
    const allReviews = listing.reviews;
    const revList = await Review.findById(reviewId);
    console.log(revList); 
    console.log("Author: " + revList.author);
    console.log("User: " + req.user._id);
    if (!revList.author.equals(req.user._id) ) {
        req.flash('error', "Access Denied: You do not have permission.");
        return res.redirect(`/listing/${id}`);
    } else {
    next();
    }
};