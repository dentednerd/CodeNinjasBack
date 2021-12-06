const { fetchQuestions } = require('../models');

exports.getQuestions = (req, res, next) => {
  const { level } = req.params;
  fetchQuestions(level)
  .then((questions) => {
    res.status(200).send({ questions });
  })
  .catch(next);
};
