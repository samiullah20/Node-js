const mongoose = require("mongoose");
// const { Schema } = mongoose;

const ProductSchema = mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  price: String,
  disc: String,
  image: String,
  date: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
