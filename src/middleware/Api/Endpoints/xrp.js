require('../../../models/userModel');

import xrp from '../../../crytpocurrency/Xrp';
import mongoose from 'mongoose';

const User = mongoose.model('UserModel');
module.exports = (req, res, next) => {


	var Xrp = new xrp();
	

	const { "hash": hash } = req.body;

	User.findOne({
		'hash': hash,
		'currency': 'XRP'
	}, (e, doc) => {
		
		if(doc){
			res.status(200).
			json(doc);
		} else {
			let XRP = Xrp.generateWallet();
			if(XRP){
				var us = new User({
					privateKey: XRP.privateKey,
					publicKey: XRP.publicKey,
					address: XRP.address,
					addressSecret: XRP.addressSecret,
					mnemonic: XRP.mnemonic,
					keyMnemonic: XRP.keyMnemonic,
		            hash: hash,
		            currency: XRP.currency,
		        });

				us.save((e, d) => {
		            res.status(200).
					json(us);
		        });
			}
				
		}
	});

}