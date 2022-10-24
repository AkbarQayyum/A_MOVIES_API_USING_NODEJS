const Movies = require("../models/movies");

//create review for a movies and store it to the movie document

const createReview = async (req, res) => {
  try {
    if (
      !req.body.hasOwnProperty("movieId") ||
      !req.body.hasOwnProperty("reviewTitle") ||
      !req.body.hasOwnProperty("reviewDate") ||
      !req.body.hasOwnProperty("reviewerName") ||
      !req.body.hasOwnProperty("review") ||
      !req.body.hasOwnProperty("rating")
    ) {
      res.send("Invalid Data.!!");
    } else {
      const reviewObj = {
        reviewTitle: req.body.reviewTitle,
        reviewerName: req.body.reviewerName,
        reviewDate: req.body.reviewDate,
        review: req.body.review,
        rating: req.body.rating,
      };
      let data = await Movies.updateOne(
        { _id: req.body.movieId },
        { $push: { reviews: reviewObj } }
      );
      res.send("review added...");
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

// get all review of a movie using movie id

const getAllReview = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Movies.findById(id);
    res.send(data.reviews);
  } catch (error) {
    res.send({ Error: error });
  }
};

// get a specific review of a specific movie using review ID and movie ID

const getReview = async (req, res) => {
  try {
    let movieID = req.params.movieid;
    let reviewID = req.params.reviewid;
    let data = await Movies.findById(movieID);

    data.reviews.find((f) => {
      if (f._id.valueOf() == reviewID) {
        res.send(f);
      }
    });
  } catch (error) {
    res.send({ Error: error });
  }
};

// remove a specific review using Review ID and Movie ID

const removeReview = async (req, res) => {
  try {
    let movieID = req.params.movieid;
    let reviewID = req.params.reviewid;
    let data = await Movies.updateOne(
      { _id: movieID },
      { $pull: { reviews: { _id: reviewID } } }
    );
    res.send("review successfully deleted");
  } catch (error) {
    res.send({ Error: error });
  }
};

// export functions to router files

module.exports = {
  createReview,
  getAllReview,
  getReview,
  removeReview,
};
