var fs = require("fs");

fs.readFile(process.argv[2], 'utf8', getNumberOfNewLines);

function getNumberOfNewLines(error, fileContent) {
  var numberOfNewLines = fileContent.split('\n');
  console.log(numberOfNewLines.length - 1);
}
