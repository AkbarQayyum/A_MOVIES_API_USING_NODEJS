const mongoose = require("mongoose");


// importing reviews schema 
const Review_Schema = require("./reviews");


//create new instance of mongoose schema using mongoose internal schema validtion

const Movies_Schemas = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  studio: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  castMembers: {
    type: [String],
    required: true,
  },
  dateReleased: {
    type: String,
    required: true,
  },
  runtime: {
    type: String,
    required: true,
  },
  reviews: {
    type: [Review_Schema],
  },
  overallRating: {
    type: Number,
    required: true,
  },
});


//export schema to use in model file

module.exports = Movies_Schemas;
