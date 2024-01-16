var http = require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것을 node.js에게 알려줌.
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
        if(queryData.id === undefined){
            fs.readdir('./data', function(error, filelist){
                console.log(filelist);
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                /*
                var list = `<ol>
                            <li><a href="/?id=html">HTML</a></li>
                            <li><a href="/?id=CSS">CSS</a></li>
                            <li><a href="/?id=JavaScript">JavaScript</a></li>
                        </ol>`;
                */
               var list = '<ul>';
               var i = 0;
               while(i<filelist.length){
                list = list + `<li><a href = "/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                i++;
               }
               list = list + '</ul>';
                var template = `
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>WEB - ${title}</title>
                        <meta charset = "utf-8">
                    </head>
                
                    <body>
                        <h1><a href="/">WEB</a></h1>
                        ${list}
                        <h2>${title}</h2>
                        <p>${description}</p>
                </html>`
                response.writeHead(200);
                response.end(template);
            })
        }else{
            fs.readdir('./data', function(error, filelist){
                fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){
                    var title = queryData.id;
                    var list = '<ul>';
                    var i = 0;
                    while(i<filelist.length){
                        list = list + `<li><a href = "/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                        i++;
                    }
                    list = list + '</ul>';
                    var template = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>WEB - ${title}</title>
                            <meta charset = "utf-8">
                        </head>
                    
                        <body>
                            <h1><a href="/">WEB</a></h1>
                            ${list}
                            <h2>${title}</h2>
                            <p>${description}</p>
                    </html>`
                    response.writeHead(200);    //웹브라우저가 웹서버에 접근할때, 웹 서버가 브라우저에게 200을 전송하면 파일을 성공적으로 전송했다.
                    response.end(template); //(querydata.id)를 페이지에 출력하는 역할
                });
            })
        }
    }else{
        response.writeHead(404);    //파일을 찾을수 없는 경우 서버는 404를 전송함
        response.end('Not found');
    }
});
app.listen(3000);