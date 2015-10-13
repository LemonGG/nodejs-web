// 里面主要是获取 Schema 然后处理 model 
// 最后就是返回一个 model 了
// 提供其他文件对 model 的操作 --Entiry是使用

var mongoose = require('mongoose')
var Schema = mongoose.Schema 
var models = require('./models')

for(var m in models){
	console.log('init model : m____' );
	console.log(m);
	console.log('init model : d____' );
	console.log(models[m]);
	
	mongoose.model(m, new Schema(models[m]))
	console.log(mongoose.model(m));
}

module.exports = {
	getModel : function(type){
		return _getModel(type)
	}
}

var _getModel = function(type){
	return mongoose.model(type)
}