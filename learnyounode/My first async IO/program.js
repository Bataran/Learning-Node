var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, function(err, buffer) {
    var rows = buffer.toString().split('\n');

    console.log(rows.length - 1);
});