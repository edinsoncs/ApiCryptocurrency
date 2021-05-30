require('../../../models/userModel');

import eth from '../../../crytpocurrency/Eth';
import mongoose from 'mongoose';

const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {

	const { "hash": hash } = req.body;

	let Eth = new eth(hash);
	
	User.findOne({
		'hash': hash,
		'currency': 'ETH'
	}, (e, doc) => {
		
		if(doc){
			let inf = balanceUpdt(doc,eth.informationWallet(doc));
		} else {
			
			let gn = eth.generateWallet(hash);

			gn.then((result) => {
				var us = new User({
		            hash: hash,
		            currency: 'ETH',
		            publicKey: result.address[0].address,
		            mySeed: result.mySeed,
		            password: result.password,
		            keystore: result.keystore,
		            nameFile: result.nameFile,
		            directory: result.directory
		        });

				us.save((e, d) => {
		            res.status(200).
					json(us);
		        });

			});

			
		}

	});


	let balanceUpdt = (doc, balance) => {

		balance.then((data) => {
			console.log(`Balance is: ${data}`);

			if(doc.balance != data){

				User.findOneAndUpdate({
					'_id': doc._id
				}, {
					'balance': data
				}, {new: true}, (e, result) => {
					res.status(200).
					json(result);
				});

			} else {
				res.status(200).
				json(doc);
			}

		});

	}

}