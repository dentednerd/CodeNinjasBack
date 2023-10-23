const Question = require('../models/questions');

function seedQuestions (questionSets) {
  const questionPromises = questionSets.map(questionData => {
    const question = new Question(questionData);
    return question.save();
  });

  return Promise.all(questionPromises);
}

module.exports = seedQuestions;