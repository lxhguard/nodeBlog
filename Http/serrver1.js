/*
搭建一个http的服务器，用于处理用户发送的http请求
需要使用node提供的一个模块  http

server.listen(port, [hostname], [backlog], [callback])
-监听客户端连接请求，只有调用了listen方法以后，服务器才开始工作
-port:监听端口
-hostname:主机名（IP/域名)
-backlog:连接等待队列的最大长度
-callback:调用listen方法并成功开启监听以后，会出发一个listening事件，
          callback作为该事件的执行函数
*/
//加载一个http模块
var http = require('http');
//通过http模块下的createServer创建并返回一个web服务器对象
var server = http.createServer();

server.on('error', function(err){
    console.log(err);
})

server.on('listening', function () {
    console.log('listening...');
})

server.on('request', function(req, res){
    res.writeHead(200, 'lxh', {
        'content-type':'text/html;charset=utf-8'
    });

    // console.log('有客户端请求了');

    res.write('hello');
    res.end();
})

server.listen(8080);

console.log(server.address());

