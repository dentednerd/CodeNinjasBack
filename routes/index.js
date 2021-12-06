const router = require('express').Router();
const questionsRouter = require('./questions');
const usersRouter = require('./users');
const endpoints = require('../endpoints.json');

router.get('/', (req, res) => {
  res.status(200).send({ endpoints });
});
router.use('/levels', questionsRouter);
router.use('/users', usersRouter);

module.exports = router;
