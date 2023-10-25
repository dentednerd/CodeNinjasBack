const usersRouter = require('express').Router();
const { getAllUsers, getUserByUsername, patchUser } = require('../controllers');

usersRouter
  .route('/')
  .get(getAllUsers);

usersRouter
  .route('/:username')
  .get(getUserByUsername)
  .patch(patchUser);

module.exports = usersRouter;
