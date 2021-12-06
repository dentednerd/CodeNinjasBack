const { fetchQuestions, fetchUserByUsername } = require('../models');

exports.getQuestions = (req, res, next) => {
  const { level } = req.params;
  fetchQuestions(level)
  .then((questions) => {
    res.status(200).send({ questions });
  })
  .catch(next);
};

exports.getUserByUsername = (req, res, next) => {
  const { username } = req.params;
  fetchUserByUsername(username)
  .then((user) => {
    res.status(200).send({ user });
  })
  .catch(next);
};
