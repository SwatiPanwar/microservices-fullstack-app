const express = require("express");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/orders", orderRoutes);

app.listen(3003, () => {
  console.log("Order service running on 3003");
});
