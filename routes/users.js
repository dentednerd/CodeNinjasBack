const usersRouter = require('express').Router();
const { getUserByUsername, patchUser } = require('../controllers');

usersRouter
  .route('/:username')
  .get(getUserByUsername)
  .patch(patchUser);

module.exports = usersRouter;
