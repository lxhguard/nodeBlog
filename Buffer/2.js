//buf.write()

var str = 'wanggonggege'
bf = new Buffer(12);

// bf.write(str);

// bf.write(str,1);

bf.write(str,1,3);


console.log(bf);