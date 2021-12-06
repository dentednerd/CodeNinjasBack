const router = require('express').Router();
const questionsRouter = require('./questions');
const endpoints = require('../endpoints.json');

router.get('/', (req, res) => {
  res.status(200).send({ endpoints });
});
router.use('/levels', questionsRouter);

module.exports = router;
