"use strict";
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 3000;
let mongoose = require('mongoose');
require('./models/dino.js');
mongoose.connect('mongodb://localhost/dino');

app.set('views', './views');
app.engine('.html', require('ejs').renderFile);
app.use(express.static('./public'));
app.use(express.static('./bower_components'));
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let dinoRoutes = require('./routes/dinoRoutes');

app.get('/', (req, res) => {
	res.render('index');
});
app.use('/api/v1/dino', dinoRoutes);

module.exports = app.listen(port, () => {
	console.log('Example app listening at http://localhost:' + port);
});
