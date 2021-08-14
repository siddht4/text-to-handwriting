// A simple web server
// > npm install connect serve-static
// > node server.js 8888

var port = process.env.PORT || 8080;
if (process.argv.length > 2) port = parseInt(process.argv[2]);
var connect = require('connect');
var serveStatic = require('serve');
connect().use(serveStatic(__dirname)).listen(port, function(){
  console.log('Server running on '+port+'...');
});

//  let port = process.env.PORT || 80;
//  console.log('Server running on '+port+'...');
