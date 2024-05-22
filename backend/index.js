const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config()
const connectDB = require('./config/db');
const router = require("./routes");

const app = express()
app.use(cors())

app.use(express.json({
    limit: "10mb"
}))

app.use('/api', router)

const PORT = 8080 || process.env.PORT

// app.listen(PORT, () => {
//     console.log('connect to DB');
//     console.log('Server is running at port: '+ PORT);
// })
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('connect to DB');
        console.log('Server is running at port: '+ PORT);
    })
})