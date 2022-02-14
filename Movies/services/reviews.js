const ReviewModel = require('../models/review');
class Reviews {
  async get(id) {
    const review = await ReviewModel.findById(id);
    return review;
  }

  async getAll() {
    const reviews = await ReviewModel.find();
    return reviews;
  }

  async create(data) {
    const review = await ReviewModel.create(data);
    return review;
  }

  async update(id, data) {
    const review = await ReviewModel.findByIdAndUpdate(id, data, { new: true });
    return review;
  }

  async delete(id) {
    const review = await ReviewModel.findByIdAndDelete(id);
    return review;
  }
}

module.exports = Reviews;
