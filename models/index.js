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
        questions.push(Object.assign({}, doc.data(), { id: doc.id }));
      });
      return questions;
    }
  );
};
