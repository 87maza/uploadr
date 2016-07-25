
const multer = require('multer')
const upload = multer({ dest: 'uploads/' }).single('File')
const path = require('path')
const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, '/public')));

app.post('/',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.json(req.file);
    });
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Runnin on port ' + port );
});


