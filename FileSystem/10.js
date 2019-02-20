
var fs = require('fs');

var filedir = './lxhguard/source';

fs.watch(filedir, function(ev, file){

    //不需要判断file是否有内容，因为可能是删除导致了事件的发生。
    //console.log(ev + '/' + file);

    //只要有一个文件发生了变化，我们就需要对这个文件夹下的所有文件进行读取，然后合并
    fs.readdir(filedir, function(err, dataList){
        var arr = [];
        dataList.forEach(function(f){
            
            if(f){
                var info = fs.statSync(filedir + '/' + f);

                // console.log(f);
                if (info.mode == 33188) {
                    arr.push(filedir + "/" + f);
                }
            }

        });
        // console.log(arr);

        //读取数组中的文件内容,并合并
        var content = '';
        arr.forEach(function(f){
            var c = fs.readFileSync(f);
            // console.log(c);

            content += c.toString() +'\n';
        });
        console.log(content);
        console.log('====================');

        fs.writeFile('./lxhguard/js/index.js', content, function(){});


    });
    
});