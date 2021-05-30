var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pricesModel = new Schema({
	prices: Array,
	createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('PricesModel', pricesModel);