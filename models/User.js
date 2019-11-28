const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  slackID: String,
  googleID: String,
  listFavs: [{type: Schema.Types.ObjectId, ref:"Movies"}],
  listWatchLater: [{type: Schema.Types.ObjectId, ref:"Movies"}],
  listDiscard: [{type: Schema.Types.ObjectId, ref:"Movies"}],
  photoName: {type: String, default: "user-avatar"},
  photoUrl: {type: String, default: "https://res.cloudinary.com/dexfqvxax/image/upload/v1574763513/sources/login_icon_jwepvv.svg"}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
