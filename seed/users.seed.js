const User = require('../models/users');

function seedUsers (users) {
  const userPromises = users.map(userData => {
    const user = new User(userData);
    return user.save();
  });

  return Promise.all(userPromises);
}

module.exports = seedUsers;