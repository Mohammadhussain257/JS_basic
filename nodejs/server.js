//To call node js inbuilt module we don't have to specified path 
//for exampl http 
var http = require("http");
//fs file system
var fs = require("fs");
//creating server
var server = http.createServer(function(req, res) {
    console.log(req.url);
    if (req.url == '/') {
        res.end("You are at home page");
    } else if (req.url == '/about') {
        res.end("You are at about page");
    } else if (req.url == '/creat') {
        fs.writeFile('test.txt', 'This is test file', function(err, result) {
            if (err) {
                res.end("Error in wrinting file");
            } else {
                res.end("File Written successfully");
            }
        });
    } else {
        res.end("You are at no where");
    }
    //  res.end("Welcome To Node Js");
});

//specifying port to server
server.listen(9090, function(err, result) {
    if (err) {
        console.log("Error listing");
    } else {
        console.log("Inside Server listing");
    }
});