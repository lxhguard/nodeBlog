var fs = require('fs');

fs.open('1.txt', 'r', function(err, fd){
    /*
    fs.write(fd, buffer, offset, length[, position], callback)
    */
   if(err){
       console.log('打开文件失败');
   }else{
       fs.write(fd, '1234', 2, 'utf-8', function (err, written, buffer) { });
       fs.close(fd, function(){
        
       });
   }
});