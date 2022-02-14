const express = require('express');
const Reviews = require('../services/reviews');
const { isRegular } = require('../middleware/auth');

function reviews(app) {
  const router = express.Router();
  const reviewsService = new Reviews();
  app.use('/reviews', router);

  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const review = await reviewsService.get(id);
    return res.status(200).json(review);
  });
  router.get('/', async (req, res) => {
    const reviews = await reviewsService.getAll();
    return res.status(200).json(reviews);
  });
  router.post('/', isRegular, async (req, res) => {
    const review = await reviewsService.create(req.body);
    return res.status(201).json(review);
  });

  router.put('/:id', isRegular, async (req, res) => {
    const { id } = req.params;
    const review = await reviewsService.update(id, req.body);
    // put: 200 o 204
    return res.status(200).json(review);
  });
  router.delete('/:id', isRegular, async (req, res) => {
    const { id } = req.params;
    const review = await reviewsService.delete(id);
    // delete: 200 o 202
    return res.status(200).json(review);
  });
}

module.exports = reviews;
