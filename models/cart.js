const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  da: String,
  date: String,
  price: String
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
