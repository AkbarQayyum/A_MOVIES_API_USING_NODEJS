const Movies = require("../models/movies");

// create movie record

const createMovie = async (req, res) => {
  try {
    const request = await new Movies(req.body);
    const data = await request.save();
    res.send("Movies successfully created");
  } catch (error) {
    res.send({ Error: error });
  }
};

// get all movies store in database

const getAllMovies = async (req, res) => {
  try {
    const data = await Movies.find();
    res.send(data);
  } catch (error) {
    res.send({ Error: error });
  }
};

// get a specific movie by id

const getMovieById = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Movies.findById(id);
    res.send(data);
  } catch (error) {
    res.send({ Error: error });
  }
};

// remove a movie from record using id

const removeMovie = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Movies.findByIdAndRemove(id);
    res.send("Movies Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

// update movie record

const updateMovie = async (req, res) => {
  try {
    let data = await Movies.updateOne({ _id: req.body.movieId }, {
      $set: {
      title:req.body.title,
      plot:req.body.plot,
      genres:req.body.genres,
      rating:req.body.rating,
      studio:req.body.studio,
      castMembers:req.body.castMembers,
      dateReleased:req.body.dateReleased,
    runtime:req.bodyruntime,
      }
    })
    res.send("movie record updated")
  } catch (error) {
    res.send({ "error": error });
  }
};

// export function to use in Movie routes

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  removeMovie,
  updateMovie,
};
