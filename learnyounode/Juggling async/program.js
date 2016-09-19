var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function (res1) {
    res1.setEncoding('utf8');
    var data1 = '';
    res1.on('data', function (data) {
        data1 += data.toString();
    });
    res1.on('end', function () {
        console.log(data1);
        http.get(url2, function (res2) {
            res2.setEncoding('utf8');
            var data2 = '';
            res2.on('data', function (data) {
                data2+=data.toString();
            });
            res2.on('end', function () {

                console.log(data2);
                http.get(url3, function (res3) {
                    res3.setEncoding('utf8');
                    var data3 = '';
                    res3.on('data', function (data) {
                        data3+=data;
                    });
                    res3.on('end', function () {
                        console.log(data3);
                    });
                });
            });
        })
    });

});