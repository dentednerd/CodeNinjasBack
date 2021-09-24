const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const jsonParser = require('body-parser').json;
const uri = process.env.MONGODB_URI;

const port = process.env.PORT || 6006;

mongoose.connect(uri, (err) => {
  if (err) console.log(`Mongoose could not connect to ${uri}`);
  else console.log(`Mongoose successfully connected to ${uri}`);
});

app.set('view engine', 'ejs');

app.use(jsonParser());
app.use(cors());
app.use(express.static(__dirname + '/public'));

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, () => {
    console.log(`Code Ninjas server listening on port ${port}`);
});

module.exports = app;
