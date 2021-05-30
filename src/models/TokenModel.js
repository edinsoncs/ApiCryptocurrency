var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tokenModel = new Schema({
	tokenSymbol: String,
	tokenName: String,
	tokenDecimals: String,
	tokenAddr: String,
});

module.exports = mongoose.model('Tokens', tokenModel);