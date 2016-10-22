const express = require('express');
const fs = require('fs');
const app = express();

const walk = function (dir, done, notFirst) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        next();
                    }, true);
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/files', function (req, res) {
    const fileToRead = 'C:/projects/workshop-assistant/src';
    walk(fileToRead, (err, result) => {
        res.send(result);
    });
});

app.listen(8080, function () {
    console.log('Workshop api started on port 8080!');
});
