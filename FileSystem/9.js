//自动化构建项目
var projectData = {
  name: "lxhguard",
  fileData: [
    {
      name: "css",
      type: "dir"
    },
    {
      name: "js",
      type: "dir"
    },
    {
      name: "images",
      type: "dir"
    },
    {
      name: "index.html",
      type: "file",
      content:
        "<html>\n\t<head><title>title-lxhguard</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello</h1>\n\t</body></html>"
    }
  ]
};
var fs = require('fs');

if(projectData.name){
    fs.mkdir(projectData.name, function() {});

    var fileData = projectData.fileData;

    if(fileData && fileData.forEach){
        fileData.forEach(function(f){

            f.path = projectData.name + '/' + f.name;
            f.content = f.content || '';

            switch(f.type){
                case 'dir':
                    fs.mkdirSync(f.path);
                    break;
                case 'file':
                    fs.writeFileSync(f.path, f.content);
                    break;
                default:
                    break;
            }
        })
    }
}