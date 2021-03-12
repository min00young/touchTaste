const mongoose = require('mongoose');

const { Schema } = mongoose;

const LikeSchema = new Schema({
  marketId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Like = mongoose.model('Like', LikeSchema);

module.exports = Like;