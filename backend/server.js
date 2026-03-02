const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/myntra-clone")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});