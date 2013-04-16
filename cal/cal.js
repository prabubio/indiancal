var fs = require('fs');
var mustache = require('mustache');
var dataFile =  'data/tamil_2013.json';
var templateFile = 'templates/cal.mustache';
var encodeType = 'utf8';


module.exports = {
    getCal : function(req, res) {
        var dayOfYear = function() {
            var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            return day;
        }
        
        var data = fs.readFile(dataFile, encodeType, function (err, data) {
            if (err) {
                console.log('Error: ' + err);
                return;
            } 
            
            var dayNumber = dayOfYear();
            var now = new Date();
            
            data = JSON.parse(data);
            data.tamil_data = data.tamil_data[dayNumber];
            data.tamil_data.ey = now.getFullYear();
            data.tamil_data.ed = now.getDate();
             
            var rData = {records:data};
            //console.log(rData);
            var page = fs.readFile(templateFile, encodeType, function (err, page) {
                if (err) {
                    console.log('Error: ' + err);
                    return;
                }
                var html = mustache.to_html(page,rData);
                res.send(html);     
            });
        });
    }
}