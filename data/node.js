var http = require('http');
var vm = require('vm');
var fs = require('fs');
http.createServer(function (req, res) {
	if (req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('index.html').pipe(res);
	} else if (req.url.indexOf('.jsx', req.url.length - 4) === -1) {
		fs.readFile(__dirname + req.url, function (err, data) {
  			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
      		res.end('NotFound: ' + __dirname + req.url);
			} else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data);
			}
		});
	} else {
		fs.readFile(__dirname + req.url.slice(0, -1), function (err, data) {
  			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
      		res.end('NotFound: ' + __dirname + req.url.slice(0, -1));
			} else {
				$req = req;
				$res = res;
				vm.runInThisContext(data);
			}
		});		
	}
}).listen(1337);
