const mongoose = require('mongoose');
const getCurrentDate = require('../lib/getCurrentDate');

const { Schema } = mongoose;

const CommentSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  marketId: {
    type: String,
    required: true,
  },
  description: {
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

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;