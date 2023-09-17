const express = require('express');

const host = 'localhost';
const port = 5000;
const app = express();

app.use(express.static('build'));

app.get('/', (req, res) => {
    req.sendFile(__dirname + '/build/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on ${host}:${port}`);
});
