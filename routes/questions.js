const questionsRouter = require('express').Router();
const { getQuestions } = require('../controllers');

questionsRouter
  .route('/:level/questions')
  .get(getQuestions);

module.exports = questionsRouter;
