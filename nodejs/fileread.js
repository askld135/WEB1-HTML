const fs = require('fs');   //const : 상수 <-> var :  변수
fs.readFile('nodejs/sample.txt','utf-8',function(err, data) {
    console.log(data);
});