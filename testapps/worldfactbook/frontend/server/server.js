const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/../index.html');
});

app.use(express.static(path.join(__dirname, '/../client/')));


console.log('path.join(__dirname, ' + __dirname + '/../client/');

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
