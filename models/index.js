
const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//连接mongodb
var dbname = G.C.dbName;
var uri = `mongodb://localhost/${dbname}`;

console.log('connecting to %s', uri);

db = mongoose.createConnection(uri);

db.modelsList = {}

db.getModel = function(m) {
  if(db.modelsList[m]){
    return db.modelsList[m]
  }else{
    let json = require(`./${m}`);
    let mySchema = new Schema(json);
    let myModel = db.model(`${m}`, mySchema)
    db.modelsList[m] = myModel;

    return myModel;
  }
}

module.exports = db.getModel;
