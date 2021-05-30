var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currencyModel = new Schema({
	data: Array,
	createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('CurrencyModel', currencyModel);