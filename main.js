var http = require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것을 node.js에게 알려줌.
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    
    if(pathname === '/'){
        fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){
            var template = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>WEB - ${title}</title>
                    <meta charset = "utf-8">
                </head>
            
                <body>
                    <h1><a href="/">WEB</a></h1>
                    <ol>
                        <li><a href="/?id=html">HTML</li>
                        <li><a href="/?id=CSS">CSS</li>
                        <li><a href="/?id=JavaScript">JavaScript</li>
                    </ol>
            
                    <h2>${title}</h2>
                    <p>${description}</p>
            </html>`
            response.writeHead(200);
            response.end(template); //(querydata.id)를 페이지에 출력하는 역할
        });
    }else{
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);