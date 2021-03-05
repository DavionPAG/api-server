'use srtrict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
    type: { type: String, required: true, enum: ['top', 'bottom']},
    size: { type: String, uppercase: true, enum: ['M','L','S']}
});

const foodSchema = mongoose.Schema({
    dish: { type: String, required: true},
    size: { type: String, enum: ['lunch','dinner']}
});

const clothesModel = mongoose.model('clothes', clothesSchema);
const foodModel = mongoose.model('food', foodSchema);

module.exports = {clothesModel, foodModel};
