const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    name :String,
    mileage : Number,
    price : Number
})
module.exports = mongoose.model("vehicle", vehicleSchema)