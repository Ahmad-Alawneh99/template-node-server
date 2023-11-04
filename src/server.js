const express = require('express');
const data = require('./data/data');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
	data.fcn();
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
