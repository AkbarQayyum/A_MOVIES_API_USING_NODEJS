const mongoose = require("mongoose");
const Movies_Schemas = require("./schemas/movies");
const Movies = mongoose.model("movies", Movies_Schemas)
module.exports=Movies