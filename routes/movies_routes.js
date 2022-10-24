const express = require('express');
const router = express.Router();
const Movies_Controller=require('../data/movies')
router.get('/', Movies_Controller.getAllMovies) // get all records of movies from database
router.get('/getmovie/:id', Movies_Controller.getMovieById)  // get specific movie from database using id
router.post('/create', Movies_Controller.createMovie) // create new movie in database
router.delete('/delete/:id', Movies_Controller.removeMovie) // delete movie record using id
router.put('/update', Movies_Controller.updateMovie) // update movie record 

module.exports=router