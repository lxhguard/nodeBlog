var express = require('express');
var router = express.Router();

var Category = require("../models/Category");
var Content = require("../models/Content");


router.get('/', function (req, res, next) {

    // console.log(req.userInfo);

    var data = {
        userInfo: req.userInfo,
        catogories:[],
        page:Number(req.query.page || 1),
        limit:10,
        pages:0,
        count:0
    };

    //读取所有的分类信息
    Category.find().then(function(catogories){
        // console.log(catogories);

        data.catogories = catogories;

        return Content.count();

    }).then(function(){
        data.count = count;
        //计算总页数
        data.pages = Math.ceil(data.count / data.limit);
        //取值不能超过data.pages
        data.page = Math.min(data.page, data.pages);
        //取值不能小于1
        data.page = Math.max(data.page, 1);

        var skip = (data.page - 1) * data.limit;

        return Content.find().limit(limit).skip(skip).populate(['category', 'user']).sort({
            addTime:-1
        });
    }).then(function(contents){
        data.contents = contents;
        res.render("main/index", data);
    });



    
})

module.exports = router;