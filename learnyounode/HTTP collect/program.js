var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding("utf8");
    var allData = '';
    response.on("data", function(data) {
        allData+=data.toString();
    });
    response.on("end", function () {
        console.log(allData.length);
        console.log(allData);
    });
})