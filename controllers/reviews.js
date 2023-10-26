const Movie = require('../models/movie');
const movies = require('./movies');

module.exports = {
  create,
  delete: deleteReview
};

async function create(req, res) {
  const movie = await Movie.findById(req.params.id);

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  movie.reviews.push(req.body);
  try {
    // Save any changes made to the movie doc
    await movie.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/movies/${movie._id}`);
}

async function deleteReview(req, res){
  const movie = await Movie.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  if (!movie) return res.redirect('/movies');
  // Remove the review using the remove method available on Mongoose arrays
  movie.reviews.remove(req.params.id);
  try {
    // Save any changes made to the movie doc
    await movie.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/movies/${movie._id}`)
}