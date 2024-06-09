const mongoose = require('mongoose');
const Listing = require('../models/listing.js');
const sampleData = require('./data.js');

const wanderlust = "mongodb://127.0.0.1:27017/wanderlust";
// const wanderlust = process.env.ATLAS_DB;
main().then(()=>{
    console.log("Connection Successfull");
}).catch(err=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(wanderlust);
};

const initDb = async ()=>{
    await Listing.deleteMany({});
    sampleData.data = sampleData.data.map((obj)=>({...obj,owner: "661ff437a00e446ff1c60e35"}));
    await Listing.insertMany(sampleData.data);
}

initDb();