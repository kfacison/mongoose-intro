const Movie = require('../models/movie');

module.exports = {
    new: newMovie,
    create,
    index
};

function newMovie(req, res){
    res.render('movies/new.ejs', { errorMsg: '' })
}

async function create(req, res){
    req.body.nowShowing = !!req.body.nowShowing;
    req.body.cast = req.body.cast.trim();
    if (req.body.cast) {
        req.body.cast = req.body.cast.split(/\s*,\s*/);
    }
    try {
        await Movie.create(req.body);
        res.redirect('/movies/index.ejs');
    } catch (err) {
        console.log(err);
        res.render('movies/new', { errorMsg: err.message });
    }
}

async function index(req, res) {
    const movies = await Movie.find({});
    res.render('movies/index.ejs', { movies });
}