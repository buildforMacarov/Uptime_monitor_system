/*
* Primary fie for the API
*/

// Dependencies
const http = require('http');
const url = require('url');

// the serever will repond to all request with ,a string
var server = http.createServer(function(req,res){

    // parse the URL
    var parsedUrl = url.parse(req.url,true);
    // fet the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,"");
    // send a response
    res.end("Hello\n");

    // log the request path
    console.log(`Request recieved on path : ${trimmedPath}`);
});

// start the server and listen to port:3000
server.listen(3000,function(){
    console.log("Server is listening at port 3000\n");
});