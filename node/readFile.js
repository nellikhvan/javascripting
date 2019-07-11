'use strict';

var fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err;

    var arr = data.toString().split('\n');

    console.log(arr.length-1);
});