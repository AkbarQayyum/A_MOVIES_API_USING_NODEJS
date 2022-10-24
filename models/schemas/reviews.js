const mongoose = require("mongoose");
const Review_Schema = new mongoose.Schema({
  reviewTitle: {
    type: String,
    required: true,
  },
  reviewDate: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = Review_Schema;
