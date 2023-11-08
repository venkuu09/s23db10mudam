const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    name :String,
    mileage : Number,
    price : Number
})
module.exports = mongoose.model("vehicles", vehicleSchema)