require('../../../models/userModel');

import bch from '../../../crytpocurrency/Bch';
import mongoose from 'mongoose';
//import CORE from "simple-bitcoin-wallet";
import BC from '../../../modules/Bch';

const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {

	const { "hash": hash } = req.body;

	let Bch = new bch(hash);

	User.findOne({
		'hash': hash,
		'currency': 'BCH'
	}, (e, doc) => {
		
		if(doc){

			let balance = BC(doc.publicKey);
			balance.then((data) => {
						
				if(doc.balance != data){
					UpdateBalance(data, doc);
				} else {
					res.status(200).
					json(doc);
				}

			});
			
		} else {
			let gn = bch.generateWallet(hash);

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