require('../../../models/userModel');

import mongoose from 'mongoose';
import CW from 'crypto-wallets';

const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {

	const { "hash": hash } = req.body;

	User.findOne({
		'hash': hash,
		'currency': 'IOTA'
	}, (e, doc) => {
		
		if(doc){
			res.status(200).
			json(doc);
		} else {
			CW.generateWallet('IOTA').then(function(gn){
				var us = new User({
		            hash: hash,
		            currency: gn.currency,
		            privateKey: gn.privateKey,
		            publicKey: gn.address,
		        });

				us.save((e, d) => {
		            res.status(200).
					json(us);
		        });
			});
		}
	});

}