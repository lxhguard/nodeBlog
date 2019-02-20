/* 
__filename : 返回当前模块文件的解析后的绝对路径，该属性并非全局的，而是模块作用域的
__dirname : 返回当前模块文件所在目录解析后的绝对路径，该属性并非全局的，而是模块作用域的
*/
console.log(__filename);//正确使用
console.log(global.__filename);//错误使用 undefined

var time = setInterval(() => {
    var i = 0;
    i++;
    if(i == 5)
        clearInterval(time);//这个不好用
    var d = new Date();
    console.log('现在是:' + d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
}, 1000);