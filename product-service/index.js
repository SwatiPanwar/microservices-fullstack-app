const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

app.listen(3002, () => {
  console.log("Product service running on port 3002");
});
