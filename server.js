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

let waitlist = [{

}]

//  

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/table", function (req, res) {

    console.log("Checking Tables");
    console.log(reservations);
    return res.json(reservations);

});
app.get("/api/waitlist", function (req, res) {

    console.log("Checking Waitlist");
    console.log(waitlist);
    return res.json(waitlist);


});
app.post("/api/addreservation", function (req, res) {
    let reservation = req.body;

    console.log(reservation);
    reservations.push(reservation);

    res.json(reservation);
});

app.post("/api/addwaitlist", function (req, res) {
    let newwaitlist = req.body;

    console.log(newwaitlist);
    waitlist.push(newwaitlist);

    res.json(newwaitlist);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});