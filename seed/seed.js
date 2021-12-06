const { db } = require('../db');
const questionsData = require('./data/questions');
const usersData = require('./data/users');

questionsData.forEach((question) => {
  const questionData = {
    title: question.title,
    background: question.background,
    example: question.example,
    question: question.question,
    answers: question.answers,
    correct: question.correct
  };
  return db
    .collection('levels')
    .doc(`${question.level}`)
    .collection('questions')
    .doc(`${question.questionNumber}`)
    .set(questionData);
});

usersData.forEach((user) => {
  return db
  .collection('users')
  .doc(`${user.username}`)
  .set(user);
});
