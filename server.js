var express  = require('express');
var morgan = require('morgan');
var fs = require('fs');
var favicon = require('serve-favicon');
var port = process.env.PORT || 3000
var app = express();
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use(favicon(__dirname + '/android-icon-192x192.png'));

app.use(morgan('short'));

app.get('/', function(req,res){
	fs.createReadStream(__dirname + '/index.html').pipe(res);
})

var uploading = multer({
  dest: './uploads/',
  limits: {fileSize: 1000000, files:1},
})


// app.post('/upload',uploading, function(req, res) {

// })

    app.post('/uploads', upload.single('avatar'), function(req, res) {
        
        res.send(req.file);
    });


app.listen(port, function(){
    console.log('runnin on ' + port)
})