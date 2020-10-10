const express = require('express');
const fileUpload = require('express-fileupload');
const routes = require('./src/api/index.js');
require('log-timestamp');
require('dotenv').config();

const hostname = '0.0.0.0';
const port = 7958;

// Launching server
const app = express();

// Add headers to enable CORS
if(process.env.ENABLE_CORS === "true" || process.env.ENABLE_CORS === "TRUE") {
    app.use((req, res, next) => {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });
    console.log("CORS Policy enabled");
}

// Use express-fileupload middlware
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes());

const server = app.listen(port, hostname, () => {
    console.log(`Server running on ${hostname}:${port}`)
});

exports.router = routes;
module.exports = server;