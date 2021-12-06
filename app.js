const express = require ('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./routes');
const port = process.env.PORT || 6006;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use('/api', apiRouter);
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Code Ninjas server listening on port ${port}`);
});

module.exports = app;
