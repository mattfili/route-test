var expect = require('chai').expect;
var http = require('http');

var path = require('path');

describe('routes', function () {
	var port = Math.floor(Math.random() * 30000 + 10000);
	var url = 'http://localhost:' + port;

	before(function() {
		require(path.join(process.cwd(), '/lib/server'))(port);
	});

	it('should respond to the /space route', function(done){
		http.get(url +'/space', function(res){
		    expect(res.statusCode).to.equal(200);
		    done();
		});
	});
});



