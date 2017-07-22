// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express setup

var app = express();
var PORT = 3000;

// Data Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


var reservation = [{
  name: "",
  
  number: "",
  
  email: "",
  
  uniqueid: "",
  
 }];

   if () {
    console.log();

    for (var i = 0; i < reservation.length; i++) {
      if ( === reservation[i].routeName) {
        return res.json(reservation[i]);
      }
    }
    return res.json(false);
  }
  return res.json();
}; 






// Listener

app.listen(PORT, function() {
  console.log("Listening on PORT" + PORT);
});