const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
const Movies = require("./routes/movies_routes");
const reviews = require("./routes/review_routes");
dotenv.config();
require("./config/mongodb_connection");
app.use("/movies", Movies);
app.use("/reviews", reviews);
app.listen(process.env.PORT, console.log("Server started ..."));


