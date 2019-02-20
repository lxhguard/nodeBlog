/*
在一个模块中通过var定义的变量，其作用域范围是当前模块，，外部不能够直接的访问
如果我们想一个模块能够访问另外一个模块中定义的变量，可以：
    1.把变量作为global对象的一个属性    (不推荐)
    2.使用模块对西那个 module

*/
//var a = 100;

//方法一
//global.a = 100

//方法二
/*
module : 保存提供和当前模块有关的一些信息
在这个module对象中，又一个子对象： exports对象
我们可以通过这个对象把一个模块中的局部变量进行提供访问
*/
// console.log(module)
// var a = 100;
// module.exports.a = a;

/*
在模块作用域，还有一个内置的模块对象，exports，他其实就是module.exports
*/
// console.log(module.exports === exports);
// exports.a = a;

/*
下面注意两个：一定不要进行对象改写（即重新指向另外一个对象）
*/
module.exports = [1,2,3];//exports 和 module.exports 的指向关系已经断开了
exports.a = 200;//此时添加并不起作用
//也不要像下面这样
//exports = [1,2,3];
