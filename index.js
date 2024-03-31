const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

require("dotenv").config();
const dbPassword = process.env.DB_PASSWORD;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

mongoose
  .connect(
    `mongodb+srv://enumconcat:${dbPassword}@crud.ainu3om.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Crud`
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
