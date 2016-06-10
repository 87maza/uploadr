var express  = require('express');
var morgan = require('morgan');
var fs = require('fs');
var favicon = require('serve-favicon');
var app = express();
var router = express.Router();
var formidable = require('formidable');
var util = require('util');
var http = require('http');


app.use(favicon(__dirname + '/android-icon-192x192.png'));

app.use(morgan('short'));

http.createServer(function(req, res) {
  if (req.url == '/uploads' && req.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log(fields)
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('File Metadata:\n');
      res.end(util.inspect({files: files}));
    });
    
    return;
  }
  res.writeHead(200, {'content-type': 'text/html'});
  fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(8080);