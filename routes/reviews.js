const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// POST /movies/:id/reviews (create review for a movie)
router.post('/movies/:id/reviews', reviewsCtrl.create);
router.delete('/', reviewsCtrl.delete);

module.exports = router;