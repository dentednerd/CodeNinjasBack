const mongoose = require('mongoose');
mongoose.Promise = Promise;

const seedUsers = require('./users.seed');
const seedQuestions = require('./questions.seed');
const users = require('./data/users');
const questionSets = require('./data/questions');
const { MONGODB_URI } = require('../config');

mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    mongoose.connection.db.listCollections().toArray((err, names) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < names.length; i++) {
          mongoose.connection.db.dropCollection(names[i].name, () => {
            console.log(`Dropped ${names[i].name} collection.`);
          });
        }
      }
    });
  })
  .then(() => {
    return seedUsers(users);
  })
  .then(() => {
    console.log('Users collection seeded.');
  })
  .then(() => {
    return seedQuestions(questionSets);
  })
  .then(() => {
    console.log('Questions collection seeded.');
    console.log('Seeding complete!');
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    return mongoose.connection.close();
  });
