const { mongoose } = require('../config/db');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  name: String,
  date: Date,
  comments: String,
  rating: Number,
});

const reviewModel = mongoose.model('reviews', reviewSchema);

module.exports = reviewModel;
