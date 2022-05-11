const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
//adding morgan middleware
app.use(morgan('dev'));
//adds middleware to parse json data to js
app.use(express.json());

//support for RESTAPI
app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.header = ('Content-Type', 'text/plain');
    next();
});

//post request using json data
app.post('/campsites', (req, res) => {
    res.end(`Will add the campsites: ${req.body.name} with the description: ${req.body.description}`);
});

app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})

app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});

app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you.`);
});

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
})

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/campsite/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});
//endpoint for next function. no next is needed b/c this is the last route
app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you.'); 
});

//set up express to serve files from the public folder
app.use(express.static(__dirname + '/public'));

//set up server with a use method and a callback
app.use((req, res,) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
})

//create an instance of the server class and listen 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}`);
})