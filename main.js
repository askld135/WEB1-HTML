var http = require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것을 node.js에게 알려줌.
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + _url);
    response.end(queryData.id); //(querydata.id)를 페이지에 출력하는 역할
});
app.listen(3000);