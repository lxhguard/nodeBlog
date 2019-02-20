//操作文件夹
var fs = require('fs');

/*创建
fs.mkdir(path, [mode], callback)
*/
// fs.mkdir('./1',function(){
//     console.log(arguments);
// })

/*删除
*/
// fs.rmdir('./1', function () {
//     console.log(arguments);
// })

//读取
fs.readdir('./',function(err,fileList){
    //console.log(fileList);

    fileList.forEach(function(f){
        fs.stat(f,function(err,info){
            // console.log(arguments);
            switch(info.mode){
                case 33188 :
                    console.log('[文件]' + f);
                    break;
                case 16877:
                    console.log('[文件夹]' + f);
                    break;
            }
        })
    })
})
