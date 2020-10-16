// CREATE A SERVER THROUGH NODE.JS
// Import functionality (handful of functions and objects globally)
// Most functionalities are available by default
// Core Modules that Node.js Ships with (http, https, fs, path, os) (some of them not all)
// http Launches a server and sends requests
// https Launches a SSL Encrypted Server

// Can use features in these files
// can give any name you want but convention to keep the name of module you are using
// require keyword exposes it globally, either takes a path(js files), if not import a core module
const http = require('http');

// Has to receive two arguments, a request and a response object i.e. req, res
// can pass the function name requestListener into createServer
//* function requestListener(req, res) {
//*     console.log(req);
//* }

//Another way to write it
// *http.createServer(function (req, res) {
//*    console.log(req) 
//* });

// start using functionalities from global modules
// http has a bunch of fields to execute, most important createServer() 
// request Listener will execute with every request (see Request Listener Function Above)
//* http.createServer();

// Store this in a variable, because it returns a server
const server = http.createServer((req, res) => {
    // sends back request information
    console.log(req.url, req.method, req.headers);
    //process.exit() will still run the request but when you reload the page it will quit the process
    // Typically you do not call this in your code, basically hard exits the event loop and the program shuts down
    //* process.exit();

    //Can use the response object for filled data to send back
    // allows you to get a new Header
    // attach a header to the response
    //* res.setHeader('Content-Type', 'text/html');
    
    // allows you to write something with a response
    // can send HTML using res.write on multiple lines
    //* res.write('')

    //cannot write anymore with you ending it, it will be sent back to the client before end
    // can view the setHeader in the Chrome Developer Tools
    //*res.end();
})

//server to listen for requests and keep it running
// 3000 is the port name with local host
server.listen(3000, 'localhost');