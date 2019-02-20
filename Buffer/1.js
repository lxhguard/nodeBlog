/*
    Buffer类
        用于操作二进制数据流
*/

//new Buffer(size); size [Number] 创建一个Buffer对象，并为这个对象分配一个大小
//当我们为一个Buffer对象分配一个空间大小以后，其长度是固定的，不能更改


// var bf = new Buffer(5);
// console.log(bf)
// bf[1] = 2
// console.log(bf)

//new Buffer(array):
// var bf = new Buffer([1,2,3]);
// console.log(bf);
// bf[10] = 10;
// console.log(bf);


//new Buffer(string, [encoding])
var bf = new Buffer('wanggonggege','utf-8');
console.log(bf);
for( var i = 0; i < bf.length; i++){
    // console.log(bf[i]);
    console.log( String.fromCharCode(bf[i]) );
}

