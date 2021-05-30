require('../../../models/userModel');

import mongoose from 'mongoose';
import CW from 'crypto-wallets';
import moneroWallet from 'monero-nodejs';
const MONERO = require('monero-rpc').Daemon



const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {
	const daemon = new MONERO('http://localhost:18081');

	daemon.getLastBlockHeight((err, height) => {
    	if (err) return console.log(err)
    	console.log(height) // 993163
	});

	const { "hash": hash } = req.body;

	User.findOne({
		'hash': hash,
		'currency': 'XMR'
	}, (e, doc) => {
		
		if(doc){
			res.status(200).
			json(doc);
		} else {
			CW.generateWallet('XMR').then(function(gn){
				var us = new User({
		            hash: hash,
		            currency: gn.currency,
		            privateKey: gn.privateKey,
		            publicKey: gn.address,
		            mnemonic: gn.mnemonic,
		            privateViewKey: gn.privateViewKey
		        });

				us.save((e, d) => {
		            res.status(200).
					json(us);
		        });
			});
		}
	});

}