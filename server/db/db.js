const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/Stonks');
//mongoose.set('strictQuery', true);
// 2. Set up any schema and models needed by the app
let stonkSchema = mongoose.Schema({
  word: String,
  description: String
});
let Stonks = mongoose.model('Stonks',stonkSchema);
// 3. Export the models
module.exports = Stonks;