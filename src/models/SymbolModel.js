var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var symbolModel = new Schema({
	country: Array,
	createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('SymbolModel', symbolModel);