const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  movieApiId: Number,
  voteAverage:Number,
  title:      String,
  genre:      String,
  releaseDate:Number,
  imgPath:    String


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Movies = mongoose.model('Movies', movieSchema);
module.exports = Movies;
