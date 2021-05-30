require('../models/userModel');
require('../models/Transactions');

import mongoose from 'mongoose';

import CW from 'crypto-wallets';
import CryptoAccount from 'send-crypto';


const User = mongoose.model('UserModel');
const Transactions = mongoose.model('Transactions');

class Bch{

	constructor(hash, currency, privateKey, publicKey){
		this.hash = hash;
		this.currency = currency;
		this.privateKey = privateKey;
		this.publicKey = publicKey;
	}


	/*
	* Create new wallet in bch
	*/
	static generateWallet(hash){
		var gn = CW.generateWallet('BCH');
		return new this(hash, gn.currency, gn.privateKey, gn.address);
	}

	/*
	* New transactions in bch
	*/
	static transfer(body, res){

		let { hash, amount,  address} = body;

		User.findOne({
			'hash': hash,
			'currency': 'BCH'
		}, (e, doc) => {

			const privateKey =  CryptoAccount.newPrivateKey(doc.privateKey);
			const account = new CryptoAccount(privateKey);

			account.send(
				address,
				amount,
				"BCH"
			).then((data) => {

				if(data){

					console.log(data);

					var TR = new Transactions({
						txt: data.transactionHash,
						meAddress: doc.publicKey,
						receiveAddress: address,
						amount: amount,
						cryptocurrency: 'BCH',
						user: doc._id,
					});

					TR.save((e,x)=> {
						res.status(200).json({'status': 1, data: TR});
					});

				}

				console.log(data);
			}, function(error){
				res.status(200).json({'status': 0, data: error.message});
			}).catch(function () {
			   console.log("Promise Rejected");
		  	});
			//console.log(await account.address("BCH"), account);

		});

	}

	

}

export default Bch;