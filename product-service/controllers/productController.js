const products = require("../db/products");

// GET all products
const getProducts = (req, res) => {
  res.json(products);
};

// ADD product
const addProduct = (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: Date.now(),
    name,
    price
  };

  products.push(newProduct);

  res.send("Product added successfully");
};

// IMPORTANT EXPORT (THIS IS WHERE MOST PEOPLE MISTAKE)
module.exports = {
  getProducts,
  addProduct
};
