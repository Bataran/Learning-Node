var myModule = require('./myModule');
var dirPath = process.argv[2];
var ext = process.argv[3];

myModule(dirPath, ext, function name(err, data) {
    if (err) {
        console.log(JSON.stringify(err));
    }

    var list = data.join('\n');
    console.log(list);
});