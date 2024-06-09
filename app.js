if(process.env.NODE_ENV != "production"){
require('dotenv').config();
};
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const port = 1010;
const path = require('path');
const methodOverride = require('method-override');
const ejs_mate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');

const listingRoute = require('./Routes/listings.js');
const reviewsRoute = require('./Routes/review.js')
const userRoute = require('./Routes/user.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejs_mate);
app.use(express.static(path.join(__dirname, "/public")));

const wanderlust = process.env.ATLAS_DB;

async function main() {
    await mongoose.connect(wanderlust);
};

main().then(() => {
    console.log("Connection Successfull");
}).catch(err => {
    console.log(err);
});

const store = MongoStore.create({
    mongoUrl: wanderlust,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,

  });

  store.on("error",()=>{
    console.log("Error in Mongo session Store. " , err);
  })

const sessionOption = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 24 * 60 * 60 * 1000,
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}


// app.get("/",(req,res)=>{
//     res.send("Server is Working");
//     // res.redirect("/listing");
// });

app.use(session(sessionOption));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/listing", listingRoute);
app.use('/listing/:id/reviews', reviewsRoute);
app.use('/', userRoute);
app.get("/explore",(req,res)=>{
    res.render('listing/explore.ejs');
})




//    await sampleListing.save();
//    res.send("Successfull");
// });


app.all('*', (req, res, next) => {
    next(new ExpressError(404, "Page not Found!"));
})

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went Wrong" } = err;
    res.status(status).render('listing/error.ejs', { message });
});

app.listen(port, () => {
    console.log(`listening to the port http://localhost:${port}/listing`);
});