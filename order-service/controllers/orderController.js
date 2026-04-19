const orders = require("../db/orders");

// GET all orders
exports.getOrders = (req, res) => {
  res.json(orders);
};

// CREATE order
exports.createOrder = (req, res) => {
  const { product, quantity } = req.body;

  const newOrder = {
    id: Date.now(),
    product,
    quantity
  };

  orders.push(newOrder);

  res.send("Order created successfully");
};
