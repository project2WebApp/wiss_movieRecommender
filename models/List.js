const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const listSchema = new Schema({
  userId: (req.user._id),
  // ListFavs: [String],
  // ListWatchLater: [String],
  // ListDiscard: [String],

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const List = mongoose.model('List', listSchema);
module.exports = List;
