const mongoose = require('mongoose');
const getCurrentDate = require('../lib/getCurrentDate');

const { Schema } = mongoose;

const MarketSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
  },
  marketName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: getCurrentDate(),
  },
  updatedDate: {
    type: Date,
    default: null,
  },
  deletedDate: {
    type: Date,
    default: null,
  },
});

const Market = mongoose.model('Market', MarketSchema);

module.exports = Market;