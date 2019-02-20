var fs = require('fs');

var filename = '2.txt';
/*
向一个指定的文件中写入数据，如果该文件不存在，则新建，如果存在则新的内容会覆盖原油的文件内容 
*/
// fs.writeFile(filename, 'hello.', function(){
//     console.log(arguments);
// });

// //追加新内容
// fs.appendFile(filename, 'this is a new content.', function(){
//     console.log(arguments);
// });

// fs.exists(filename, function(isExists){
//     if(!isExists){
//         fs.writeFile(filename, 'hello.', function (err) {
//             if(err){
//                 console.log("出错了");
//             }else{
//                 console.log('创建出新文件成功;');
//             }
//         });               
//     }else{
//         fs.appendFile(filename, 'this is a new content.', function (err) {
//             if(err){
//                 console.log('新内容追加失败!');
//             }else{
//                 console.log('新内容追加成功!!!');
//             }
//         });
//     }
// })



//同步模式编写
if(!fs.existsSync(filename)){
    if(fs.writeFileSync(filename, 'miao')){
        console.log('新文件创建成功!');
    }else{
        console.log('新文件创建失败');
    }
}else{
    if(fs.appendFileSync(filename, '.new len.')){
        console.log('新内容追加成功!');
    }else{
        console.log('新内容追加失败!')
    }
}