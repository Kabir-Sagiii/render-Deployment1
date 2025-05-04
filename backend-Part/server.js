const express = require("express");
const cors = require("cors");
const app = express();
const UserRoute = require("./controllers/users");
const ProductRoute = require("./controllers/products");

app.use(cors());
app.use(express.json());
app.use("/api/users", UserRoute);
app.use("/api/products", ProductRoute);

app.listen(9999, "https://render-deployment1.onrender.com", () => {
  console.log("Server Started");
});
