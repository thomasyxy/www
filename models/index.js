
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

// db.find = function(m, where){
// 	var model = db[m];
// 	var find = model.find({
// 		where: where
// 	});
// 	return thunkPromise(find);
// }
//
// db.update = function(m, values, where, keys){
// 	var model = db[m];
// 	var obj = {};
// 	// var keys = keys || [];
// 	if(keys){
// 		for(var i in values){
// 			if(keys.indexOf(i) > -1){
// 				obj[i] = values[i];
// 			}
// 		}
// 	}else{
// 		obj = values;
// 	}
//
// 	var update = model.update(obj, {
// 		where: where
// 	});
// 	return thunkPromise(update);
// }
//
// db.destroy = function(m, where){
// 	var model = db[m];
// 	var destroy = model.destroy({
// 		where: where
// 	});
// 	return thunkPromise(destroy);
// }
//
// db.deleteAll = function (models) {
//     var chainer = new Sequelize.Utils.QueryChainer();
//     models.forEach(function(m,index) {
//         chainer.add(m.destroy());
//     });
//     return chainer.run();
// }
//
// db.getPlainModel = function(m, obj){
// 	var res = {};
// 	Object.keys(m.tableAttributes).forEach(function(item){
// 		res[item] = obj[item];
// 	});
// 	return res;
// }

module.exports = db.getModel;
