var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
	hash: String,
	publicKey: String,
	privateKey: String,
	currency: String,
	simbol: String,
	mnemonic: String,
	keyMnemonic: String,
	privateViewKey: String,
	address: String,
	addressSecret: String,
	balance: {type: String, default: 0},
	createdAt: {type: Date, default: Date.now},

	//Use exclusive for ETH and Thousands of Tokens
	mySeed: String,
	password: String,
	seed: String,
	keystore: String,
	nameFile: String,
	directory:String,
	//Use exclusive for ETH and Thousands of Tokens
	qr: String,
	updatedAt: Date
});

module.exports = mongoose.model('UserModel', userModel);