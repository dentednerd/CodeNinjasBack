const mongoose = require('mongoose');
mongoose.Promise = Promise;

const seedUsers = require('./users.seed');
const seedQuestions = require('./questions.seed');
const users = require('./data/users');
const questionSets = require('./data/questions');
const { MONGODB_URI } = process.env || require('../config');

mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    return mongoose.connection.db.dropCollection('users');
  })
  .then(() => {
    console.log('Dropped users collection');
    return seedUsers(users);
  })
  .then(results => {
    return console.log(`Seeded ${results.length} users`);
  })
  .then(() => {
    return mongoose.connection.db.dropCollection('questions');
  })
  .then(() => {
    console.log('Dropped questions collection');
    return seedQuestions(questionSets);
  })
  .then(results => {
    console.log(`Seeded ${results.length} questions`);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    return mongoose.connection.close();
  });
