
var express = require('express');
var app = express();
var cal = require("./cal/cal.js");

app.use(express.static(__dirname + '/public'));
app.get('/tamil', function(req, res){
  var pagename = req.params.pagename;
    cal.getCal(req, res, pagename);
});

app.listen(3000);
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
//console.log('Listening on port 3000');
