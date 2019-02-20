/*
同步打开文件
*/

var fs = require('fs');

//这是异步
// fs.open('1.txt', 'r', function(err, fd){
//     console.log(err);
// });
// console.log('ok');

var fd = fs.openSync('1.txt', 'r');
console.log(fd);