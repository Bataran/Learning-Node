var fs = require('fs');
var filePath = process.argv[2];

var fileBuffer = fs.readFileSync(filePath);

var rows = fileBuffer.toString().split('\n');

console.log(rows.length - 1);