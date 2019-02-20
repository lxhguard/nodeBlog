// console.log(process.argv)
// console.log(process.env)


// function Log(data){
//     process.stdout.write(data);
// }
// Log('我在node');

//默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
process.stdin.resume();
//用于监听用户的输入数据
// process.stdin.on('data',function(chunk){
//     console.log('用户输入：'+chunk);
// });

var a;
var b;
process.stdout.write('请输入a的值:')
process.stdin.on('data', function (chunk) {
    if(!a){
        a = Number(chunk);
        process.stdout.write("请输入b的值:");
    }else{
        b = Number(chunk);
        process.stdout.write('结果是'+ (a + b));
    }
});


