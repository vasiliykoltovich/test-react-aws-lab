const mongoose = require("mongoose");

const connection = "mongodb://3.68.90.114:27017/mongo-test";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
