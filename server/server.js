const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + './../')); //serves the index.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/routeUpdate', (req, res, next) => {
    res.json('{}');
});


app.listen(3000, () => { console.log('PORT 3000 is listening') }); //listens on port 3000 -> http://localhost:3000/