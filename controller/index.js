const fs = require('fs');
const path = require('path');

var ctrl = {};

fs.readdirSync(__dirname).filter(function(file){
  return (file.indexOf(".") != 0) && (file !== "index.js");
}).forEach(function(file){
  var model = require(path.join(__dirname, file));
  ctrl[path.basename(file, '.js')] = model;
});

module.exports = ctrl;
