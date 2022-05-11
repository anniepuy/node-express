const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

//set up server with a use method and a callback
app.use((req, res,) => {
    console.log(req.header);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
})

//create an instance of the server class and listen 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}`);
})