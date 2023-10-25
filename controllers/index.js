const { Users, Questions } = require('../models');

exports.getQuestions = (req, res, next) => {
  const { level } = req.params;
  Questions.find({ level })
    .sort('questionNumber')
    .then((questions) => {
      return res.status(200).json({ questions });
    })
    .catch(next);
};

exports.getAllUsers = (req, res, next) => {
  Users.find()
    .then((users) => {
      return res.status(200).json({
        users
      });
    })
    .catch(next);
};

exports.getUserByUsername = (req, res, next) => {
  const { username } = req.params;
  return Users.findOne({ username })
      .then((user) => {
          if (user.length < 1) {
              return next({ status: 404, message: 'Username not found. Reveal yourself to me once more, ninja!' });
          }
          else return res.status(200).json({ user });
      })
      .catch((err) => {
          console.log(err);
          if (err.name === 'CastError') {
              return next({ status: 422, message: 'Please sign up to begin.' });
          }
      });
};

exports.patchUser = (req, res, next) => {
  const { username } = req.params;

  Users.findOneAndUpdate({username}, { $inc: { level: 1 } }, { new: true })
      .then((user) => {
          return res.status(202).json({user});
      })
      .catch(next);
};
