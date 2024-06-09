const Joi = require('joi');

module.exports.listingSchema = Joi.object({
        title: Joi.string().required(),
        Description: Joi.string().required(),
        Location: Joi.string().required(),
        Country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("",null)
});

module.exports.reviewsSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});
