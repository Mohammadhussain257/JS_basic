var express = require("express");

var port = 4000;

var app = express();

var morgan = require("morgan");

var authRoute = require('./routes/auth')(express);

app.use(morgan('dev'));

//mount http verb under '/'
app.use('/', authRoute);

//configure middleware function
//application layer middleare layer
app.use(function(req, res, next) {
    console.log("This is application layer middleware");
    console.log("Applicatio layer middleware appear in every http cycle");
    //next(); //next must be call inorder to continue execution of next function in application.
    res.end("Your are blocked at middleware");
    //res.status(200); //sucess code status
    //res.sendStatus(500); // internal server status or bad request status
});

// app.get("/", function(req, res) {

//     console.log("At get request");

//     res.json({
//         "name": "Mohammad Sheikh",
//         "Hobbies": []
//     });

//     //res.send("Welcome to express web server");
// });

// app.post("/", function(req, res) {
//     console.log("At post request");
//     res.send("Welcome to express web server");
// });

// app.put("/", function(req, res) {
//     console.log("At put request");
//     res.send("Welcome to express web server");
// });

// app.delete("/", function(req, res) {
//     console.log("At delete request");
//     res.send("Welcome to express web server");
// });

app.listen(port, function(err, result) {
    if (err) {
        console.log("Error occure!!!!");
    } else {
        console.log("Express server started at port :", port)
    }
});