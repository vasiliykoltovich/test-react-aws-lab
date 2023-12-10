const mongoose = require("mongoose");
const connection = "mongodb://54.93.253.87:27017/mongo-test";
const connectDb = () => {
  return mongoose.connect(connection);
};
module.exports = connectDb;
