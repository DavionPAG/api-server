'use srtrict';

const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true}
});

const categoryModel = mongoose.model('categories', categorySchema);

module.exports = { categoryModel };
