const Movie = require('../models/movie');

module.exports = {
    new: newMovie,
    create
};

function newMovie(req, res){


    res.render('movies/new.ejs', { errorMsg: '' })
}

async function create(req, res){

    
    res.render('movies/new', { errorMsg: err.message });
}