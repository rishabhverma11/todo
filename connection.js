var http=require('http');
http.createserver(function onRequest(req,res) {
	res.writeHead(200 {"Content-Type":'text/plain'});
	res.end("Hell")

	
}).listen(8080);
