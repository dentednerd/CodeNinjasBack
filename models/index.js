const { db } = require('../db');

exports.fetchQuestions = (level) => {
  return db
    .collection('levels')
    .doc(level)
    .collection('questions')
    .get()
    .then((snapshot) => {
      const questions = [];
      snapshot.docs.forEach((doc) => {
        questions.push(doc._fieldsProto);
      });
      return questions;
    }
  );
};
