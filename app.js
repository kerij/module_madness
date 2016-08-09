var http = require('http');

var mod3 = require('./mod3.js')
http.createServer(function(req, res) {
  res.writeHead(200);

  res.write(mod3.cashNumber());

  res.end();
}).listen(3000);
