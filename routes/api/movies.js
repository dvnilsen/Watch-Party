const express = require("express"); 
const router = express.Router();
const moviesCtrl = require("../../controllers/api/movies");

// GET api/movies
router.get("/", moviesCtrl.searchApi); 

router.get("/library", moviesCtrl.getLibrary); 

router.get("/:imdbID", moviesCtrl.getMovieDetail); 

// POST
router.post("/", moviesCtrl.create);

module.exports = router; 