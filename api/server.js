const express = require('express');
require('dotenv').config();
const connectDb = require('./src/connection');
const User = require('./src/User.model');
const cors = require('cors');

const app = express();

const PORT = process.env.API_PORT;
console.log("Connection port of API:", PORT)
app.use(cors());

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/user-create', async (req, res) => {
  const user = new User({ username: 'userTest' });
  await user.save().then(() => console.log('User created'));
  res.send('User created \n');
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log('MongoDb connected');
  });
});