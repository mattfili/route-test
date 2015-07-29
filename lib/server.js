var http = require('http');
var https = require('https');

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
		}

		else if (req.method === 'GET' && req.url === '/weather') {
			res.writeHeader(200, {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			});

      		https.get('https://api.forecast.io/forecast/52b0f2a10c9f18f8bda8331485c532de/36.1658,-86.7777')
        	.on('response', function (xhr) {
          		xhr.pipe(res);
        	});

		} else {
			res.writeHead(403)
			res.end('Access Denied!')
		}
	}).listen(port)
}



