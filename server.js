const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const jsonParser = require('body-parser').json;
const { MONGODB_URI } = require('./config');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const port = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI, (err) => {
  if (err) console.log(`Mongoose could not connect to ${MONGODB_URI}`);
  else console.log(`Mongoose successfully connected to ${MONGODB_URI}`);
});

app.set('view engine', 'ejs');

app.use(jsonParser());
app.use(cors());
app.use(express.static(__dirname + '/public'));

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.get('/', (req, res) => { res.render('index'); });

app.listen(port, () => {
  console.log(`Code Ninjas listening on port ${port}...`);
});

module.exports = app;
