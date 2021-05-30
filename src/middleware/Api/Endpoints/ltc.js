require('../../../models/userModel');

import ltc from '../../../crytpocurrency/Ltc';
import mongoose from 'mongoose';
import LT from '../../../modules/Ltc';
const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {

	const { "hash": hash } = req.body;

	let Ltc = new ltc(hash);

	User.findOne({
		'hash': hash,
		'currency': 'LTC'
	}, (e, doc) => {
		
		if(doc){
			
			let balance = LT(doc.publicKey);
			balance.then((data) => {
				if(doc.balance != data){
					UpdateBalance(data, doc);
				} else {
					res.status(200).
					json(doc);
				}
			});
			
			
		} else {
			let gn = ltc.generateWallet(hash);
			var us = new User({
	            hash: hash,
	            currency: gn.currency,
	            privateKey: gn.privateKey,
	            publicKey: gn.publicKey
	        });

			us.save((e, d) => {
	            res.status(200).
				json(us);
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