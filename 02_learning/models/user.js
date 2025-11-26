const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testapp1')
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    image: String,
    name: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema);
