const mongoose = require("mongoose");
const connection = "mongodb://35.158.205.139:27017/mongo-test";
const connectDb = () => {
  return mongoose.connect(connection);
};
module.exports = connectDb;
