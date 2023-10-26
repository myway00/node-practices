var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log(req.url);

    if(req.url === '/') {
        req.url = '/index.html';
    }

    fs.readFile(__dirname + "/public" + req.url, function(error, data){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(data);
    });
});

server.listen(9090, function(){
    console.log('server starts...[9090]');
})