//Require
var express = require('express');
var app = express();
var cal = require("./cal/cal.js");

//Routes
app.get('/', function(req, res){
    console.log('[LOG] redireting to tamil calendar');
    res.writeHead(302, {Location: 'http://indiancal.com/tamil'});
    res.end();
});

app.use(express.static(__dirname + '/public'));

app.get('/tamil', function(req, res){
    var pagename = req.params.pagename;
    cal.getCal(req, res, pagename);
});


//Listen
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

