var express = require('express');
var router = express.Router();

const moviesCtrl = require('../controllers/movies');

//GET /movies/new
router.get('/new', moviesCtrl.new);

//POST /movies
router.post('/', moviesCtrl.create);


module.exports = router;
