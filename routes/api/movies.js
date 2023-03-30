const express = require("express"); 
const router = express.Router();
const moviesCtrl = require("../../controllers/api/movies");

// GET api/movies
router.get("/", moviesCtrl.searchApi); 

// POST
//router.post("/new", moviesCtrl.create);

module.exports = router; 