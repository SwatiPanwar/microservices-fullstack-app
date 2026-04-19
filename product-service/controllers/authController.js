const products = require("../db/products");

// GET all products
exports.getProducts = (req, res) => {
  res.json(products);
};

// ADD product
exports.addProduct = (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: Date.now(),
    name,
    price
  };

  products.push(newProduct);

  res.send("Product added successfully");
};
