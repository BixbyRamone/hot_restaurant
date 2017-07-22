var fs = require('fs');

var movieName = process.argv[2];
//fs.writeFile( file name, data, callback)
fs.writeFile('movies.txt', movieName, function(err) {

    if (err) {
        //do somting, exit, yell at console
    } else {
        fs.readFile('movie.txt', 'utf8', function(error, data) {
            console.log(data);
        });
    }
});
