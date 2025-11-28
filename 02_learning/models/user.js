const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testapp1')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define schema
const UserSchema = new mongoose.Schema({
    image: String,
    name: String,
    email: String
});

// Export model
module.exports = mongoose.model('User', UserSchema);

