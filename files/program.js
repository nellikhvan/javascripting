'use strict';

var fs = require('fs');


console.log(process.argv[2]);
fs.readdir(process.argv[2], (err, list) => {
    console.log(list);
});