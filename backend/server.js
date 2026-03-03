const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const recentlyViewedRoutes = require("./routes/recentlyViewedRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/recently-viewed", recentlyViewedRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/myntra-clone")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// Start Server
app.listen(2004, "0.0.0.0", () => {
  console.log("Server running on port 2004 🚀");
});