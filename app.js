//Require
var express = require('express');
var app = express();
var cal = require("./cal/cal.js");

//Routes
app.use(express.static(__dirname + '/public'));
app.get('/tamil', function(req, res){
    var pagename = req.params.pagename;
    cal.getCal(req, res, pagename);
});
app.get('/', function(req, res){
    res.writeHead(302, {Location: 'http://indiancal.com/tamil'});
    res.end();
});

//Listen
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

