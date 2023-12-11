require('dotenv').config();
const mongoose = require("mongoose");
const connection = process.env.MONGODB_URL
console.log("Connection url to mongo:", connection)
const connectDb = () => {
  return mongoose.connect(connection);
};
module.exports = connectDb;
