const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const NodeGeocoder = require("node-geocoder");

const MONGO_URL = process.env.DB_URL;

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    for (let info in initdata.data) {
        for (let location in initdata.data[info]) {
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
            initdata.data[info].owner = "682c83b6428fbcdb5492da12";
            initdata.data[info].geometry = geometry;
            console.log(initdata.data[info].geometry.coordinates);
            break;
        }
    }
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
}

initDB();