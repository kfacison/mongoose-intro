const Movie = require('../models/movie');

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

  // find the reviw in the array and then splice
  //movie.reviews.splice(req.body,1);
  try {
    // Save any changes made to the movie doc
    await movie.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/movies/${movie._id}`)
}