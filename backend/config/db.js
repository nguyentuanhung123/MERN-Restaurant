const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const connectDB = async () => {
    try{
        // console.log(process.env.MONGODB_URL);
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URL);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;