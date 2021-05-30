require('../../../models/userModel');
import btc from '../../../crytpocurrency/Btc';
import mongoose from 'mongoose';
import SO from '../../../modules/So-chain';
const User = mongoose.model('UserModel');




module.exports = (req, res, next) => {

	const { "hash": hash } = req.body;

	let Btc = new btc(hash)

	User.findOne({
		'hash': hash,
		'currency': 'BTC'
	}, (e, doc) => {
		
		if(doc){

			let balance = SO(doc.publicKey);
			balance.then((data) => {
				if(doc.balance != data){
					UpdateBalance(data, doc);
				} else {
					res.status(200).
					json(doc);
				}

			});


		} else {
			let gn = btc.generateWallet(hash);

			var us = new User({
	      hash: hash,
	      currency: gn.currency,
	      privateKey: gn.privateKey,
	      publicKey: gn.publicKey
	    });

			us.save((e, d) => {
	      res.status(200).json(us);
	    });
		}

	});


	let UpdateBalance = (balance, doc) => {
		User.findOneAndUpdate({
				'_id': doc._id
			}, {
				'balance': balance
			}, {new: true}, (e, result) => {
				res.status(200).
				json(result);
		});
	}

}