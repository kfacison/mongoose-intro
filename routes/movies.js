var express = require('express');
var router = express.Router();

const moviesCtrl = require('../controllers/movies');

//ALL ROUTES START WITH /movies

//GET /movies/new
router.get('/new', moviesCtrl.new);
router.get('/index', moviesCtrl.index);

//POST /movies
router.post('/', moviesCtrl.create);


module.exports = router;
