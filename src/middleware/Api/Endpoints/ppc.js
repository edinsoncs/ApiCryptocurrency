require('../../../models/userModel');

import ppc from '../../../crytpocurrency/Ppc';
import mongoose from 'mongoose';
import PC from '../../../modules/Ppc';
const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {

	const { "hash": hash } = req.body;

	let Eth = new ppc(hash);

	User.findOne({
		'hash': hash,
		'currency': 'PPC'
	}, (e, doc) => {
		
		if(doc){

			let balance = PC(doc.publicKey);
			balance.then((data) => {

				if(doc.balance != data){
					UpdateBalance(data, doc);
				} else {
					res.status(200).
					json(doc);
				}

			});

		} else {
			let gn = ppc.generateWallet(hash);

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