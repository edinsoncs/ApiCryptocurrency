require('../../../models/userModel');

import doge from '../../../crytpocurrency/Doge';
import mongoose from 'mongoose';
import DO from '../../../modules/Doge';
const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {

	const { "hash": hash } = req.body;

	let Doge = new doge(hash);

	User.findOne({
		'hash': hash,
		'currency': 'DOGE'
	}, (e, doc) => {
		
		if(doc){
			
			let balance = DO(doc.publicKey);
			balance.then((data) => {

				if(doc.balance != data){
					UpdateBalance(data, doc);
				} else {
					res.status(200).
					json(doc);
				}

			});

		} else {
			let gn = doge.generateWallet(hash);

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