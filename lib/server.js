var http = require('http');

module.exports = function (port) {
	http.createServer(function(req, res) {
		if (req.method ==='GET' && req.url ==='/space') {
			res.writeHeader(200, {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			});

			http.get('http://swapi.co/api/starships/9/')
			.on('response', function (xhr) {
				xhr.pipe(res);
			});
			
		} else {
			res.writeHead(403)
			res.end('Access Denied!')
		}
	}).listen(port)
}


// 