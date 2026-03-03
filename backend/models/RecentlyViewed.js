const mongoose = require("mongoose");

const recentlyViewedSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  recentlyViewed: [
    {
      productId: String,
      viewedAt: Date,
    },
  ],
});

module.exports = mongoose.model("RecentlyViewed", recentlyViewedSchema);