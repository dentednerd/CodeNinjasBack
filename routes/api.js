const router = require('express').Router();
const usersRouter = require('./users');
const questionsRouter = require('./questions');
const updateUser = require('./users');
const endpoints = require('../endpoints.json');

router.get('/', (req, res) => {
    res.status(200).send({ endpoints });
});

router.use('/users', usersRouter);
router.put('/users', updateUser);

router.use('/levels', questionsRouter);

module.exports = router;
