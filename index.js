var xmlParser = require('xml2json');
var child = require('child_process').spawn;
var path = require('path');

exports.parse = function(file, callback) {
  var xml = "";

  path.exists(file, function(exists){
    if (!exists) {
      calllack(new Error('file does not exist'));
    }
    
    xlhtml = child('xlhtml',['-xml', file]);

    xlhtml.stdout.on('data', function(data) {
        xml += data;
    });
    xlhtml.on('exit', function() {
      callback(null, xmlParser.toJson(xml, {object: true}));
    });
  });
};