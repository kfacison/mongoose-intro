const Movie =require('../models/movie')

module.exports = {
    create
};

async function create(req, res){
    const movie = await Movie.findById(req.params.id);
    console.log(req.body);
    movie.reviews.push(req.body);
    try {
        // Save any changes made to the movie doc
        await movie.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/movies/${movie._id}`);
}