var fs = require('fs');
var path = require('path');

module.exports = doWork;

function doWork(dirName, extension, callback) {
    fs.readdir(dirName, listFiles);

    function listFiles(error, files) {
        if (error) {
            return callback(error);
        }

        var filteredFiles = [];

        for (var i = 0; i < files.length; i++) {
            if (path.extname(files[i]) === '.' + extension) {
                filteredFiles.push(files[i]);
            }
        }
        return callback(null, filteredFiles);
    }
}