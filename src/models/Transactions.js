var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Transactions = new Schema({
	txt: String,
	meAddress: String,
	receiveAddress: String,
	amount: String,
	gasPrice: String,
	gasLimit: String,
	cryptocurrency: String,
	user: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }],
	token: [{ type: Schema.Types.ObjectId, ref: 'Tokens' }],
	createdAt : {type: Date, default: Date.now}
});

module.exports = mongoose.model('Transactions', Transactions);