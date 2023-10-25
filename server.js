require('dotenv').config();
const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const jsonParser = require('body-parser').json;
const { MONGODB_URI } = require('./config');

const port = process.env.PORT || 6000;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Success: Mongoose connected to MongoDB database.');
  }).catch((err) => {
    console.log('Error: Mongoose could not connect to MongoDB database.');
    console.log(err);
  });

app.set('view engine', 'ejs');

app.use(jsonParser());
app.use(cors());
app.use(express.static(__dirname + '/public'));

const apiRouter = require('./routes');
app.use('/api', apiRouter);

app.get('/', (req, res) => { res.render('index'); });

app.listen(port, () => {
  console.log(`Code Ninjas listening on port ${port}...`);
});

module.exports = app;
