var expect = require('chai').expect;
var http = require('http');
var path = require('path');

describe('the tru tru', function () {
	it('should do booleanz good', function () {
		expect(true).to.equal(true);
		expect(false).to.not.equal(true);
	});
});

// describe.skip('routes', function () {
// 	this.timeout(30000)
// 	var port = Math.floor(Math.random() * 30000 + 10000);
// 	var url = 'http://localhost:' + port;

// 	before(function() {
// 		require(path.join(process.cwd(), '/lib/server'))(port);
// 	});

// 	it('should respond to the /space route', function(done){
// 		http.get(url +'/space', function(res){
// 		    expect(res.statusCode).to.equal(200);
// 		    done();
// 		});
// 	});

// 	it('should respond to the /weather route', function(done){
// 		http.get(url +'/weather', function(res){
// 		    expect(res.statusCode).to.equal(200);
// 		    done();
// 		});
// 	});
// });


// describe('routes', function () {
// 	this.timeout(30000)
// 	var port = Math.floor(Math.random() * 30000 + 10000);
// 	var url = 'http://localhost:' + port;

// 	before(function() {
// 		require(path.join(process.cwd(), '/lib/challk'))(port);
// 	});


// 	it('should throw back the correct response code', function(done) {
// 		http.get(url, function(res) {
// 			expect(res.statusCode).to.equal(200);
// 			done();
// 		});
// 	});
// });


// var log = require(path.join(process.cwd(), '/lib/logger'));

// describe('log', function () {
//   it('should create the log', function () {
//     var date = (new Date()).toUTCString();
//     var req1 = {
//       method: 'GET',
//       url: '/this/is/a/path.png',
//       headers: {
//         'user-agent': 'Lynx/2.8.8rel.2 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/1.0.2d'
//       }
//     };

//     var req2 = {
//       method: 'POST',
//       url: '/my/form',
//       headers: {
//         'user-agent': 'curl/7.43.0'
//       }
//     };

//     var goal1 = '[' + date + '] "\u001b[36mGET\u001b[39m \u001b[36m/this/is/a/path.png\u001b[39m" "Lynx/2.8.8rel.2 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/1.0.2d"';
//     var goal2 = '[' + date + '] "\u001b[36mPOST\u001b[39m \u001b[36m/my/form\u001b[39m" "curl/7.43.0"';
//     expect(log(req1)).to.equal(goal1);
//     expect(log(req2)).to.equal(goal2);


//   });
// });

// var log = require(path.join(process.cwd(),'/lib/log'));

// describe('Log', function() {

//   describe('#errorMsg()', function() {

//     it('should generate an error based on the status code and status message', function() {
//       res = {};
//       res.statusCode = 404;
//       res.statusMessage = 'Not found';

//       expect(log.errorMsg(res)).to.equal('Error (' + chalk.red('404') + '): "' + chalk.red('Not found') + '"');
//     });

//   });

//   describe('#timestamp()', function() {

//     it('should return a timestamp with the current time', function(){
//       var res = {};
//       res._header = [
//         'HTTP/1.1 200 OK\n',
//         'Content-Type: application/json\n',
//         'Access-Control-Allow-Origin: *\n',
//         'Date: Thu, 30 Jul 2015 15:40:36 GMT\n',
//         'Connection: keep-alive\n',
//         'Transfer-Encoding: chunked\n'
//       ].join('');

//       expect(log.timestamp(res)).to.equal('Thu, 30 Jul 2015 15:40:36 GMT');
//     });

//   });

//   describe('#request()', function() {

//     it('should return the method and the url of a req in blue if res is 200', function() {
//       var req = { method : 'GET', url : '/weather' };
//       var res = { statusCode : 200 }

//       expect(log.request(req,res)).to.equal(chalk.cyan('GET /weather'));
//     });

//     it('should return the method and the url of a req in red if res not 200', function() {
//       var req = { method : 'GET', url : '/weather' };
//       var res = { statusCode : 404 }
//       expect(log.request(req,res)).to.equal(chalk.red('GET /weather'));

//     });

//   });

//   describe('#userAgent()', function() {

//     it('should return information about the clients browser', function() {
//       var req = {};
//       req.headers = { 'user-agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2468.2 Safari/537.36' }
//       expect(log.userAgent(req)).to.equal('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2468.2 Safari/537.36');
//     });

//   });

//   describe('#log()', function() {

//   });
// });



