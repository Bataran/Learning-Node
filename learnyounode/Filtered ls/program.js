var dirPath = process.argv[2];
var ext = process.argv[3];
var fs = require('fs');
var path = require('path');

fs.readdir(dirPath, listFiles);

function listFiles(error, files) {
	var filteredFiles = [];

	for (var i = 0; i < files.length; i++) {
		if (path.extname(files[i]) === '.' + ext) {
			filteredFiles.push(files[i]);
		}
	}
	var list = filteredFiles.join('\n')
	console.log(list);
}