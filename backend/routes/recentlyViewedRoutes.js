const express = require("express");
const router = express.Router();
const RecentlyViewed = require("../models/RecentlyViewed");

// ==========================
// GET Recently Viewed
// ==========================
router.get("/:userId", async (req, res) => {
  try {
    console.log("GET route hit from mobile");

    const data = await RecentlyViewed.findOne({
      userId: req.params.userId,
    });

    res.json(data || { userId: req.params.userId, recentlyViewed: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================
// POST Recently Viewed
// ==========================
router.post("/", async (req, res) => {
  
  try {
    console.log("POST route hit");
    console.log("Request Body:", req.body);

    const { userId, recentlyViewed } = req.body;

    if (!userId || !recentlyViewed) {
      return res.status(400).json({ message: "Missing userId or recentlyViewed" });
    }

    const updated = await RecentlyViewed.findOneAndUpdate(
      { userId },
      
      { recentlyViewed },
      { upsert: true, new: true }
    );

    res.json(updated);

  } catch (err) {
    console.log("POST Error:", err);
    res.status(500).json({ error: err.message });
  }
  
});

module.exports = router;
