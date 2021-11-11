const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
    Brand: String,
    price: Number,
    color: String
})
module.exports = mongoose.model("pen",
penSchema)