const express = require('express');
const app = express();
const port = 3000;

// simple route just for setup
app.get('/', (req, res) => {
    res.send('Hello world!');
});

//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});