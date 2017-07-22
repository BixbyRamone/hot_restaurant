var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

let reservations = [{
    "customerName": "Test Table",
    "phoneNumber": "123-456-7890",
    "customerEmail": "test@gmail.com",
    "customerID": "Table 1"
}];

//  

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "Tables page HTML"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/:tables?", function (req, res) {

    console.log("Checking");
    console.log(reservations);
    return res.json(reservations);



});

app.post("/api/add", function (req, res) {
    let reservation = req.body;

    console.log(reservation);
    reservations.push(reservation);

    res.json(reservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});