require('../models/userModel');
require('../models/Transactions');

import CW from 'crypto-wallets';
import mongoose from 'mongoose';
import Calculate from '../modules/calculate/btc';
import Transaction from '../modules/Btc';
//import CryptoAccount from 'send-crypto';
const User = mongoose.model('UserModel');
const Transactions = mongoose.model('Transactions');

class Btc{

	constructor(hash, currency, privateKey, publicKey){
		this.hash = hash;
		this.currency = currency;
		this.privateKey = privateKey;
		this.publicKey = publicKey;
	}


	/*
	* Create new wallet in btc
	*/
	static generateWallet(hash){
		var gn = CW.generateWallet('BTC');
		return new this(hash, gn.currency, gn.privateKey, gn.address);
	}


	/*
	* New transactions in btc
	*/
	static transfer(body, res){

		let { hash, receiveAddress, amount } = body;

		User.findOne({
			'hash': hash,
			'currency': 'BTC'
		}, (e, doc) => {

				if(!doc){ res.json(200).json({'status': 0, message: 'Data incorrect'}); }

				const tr =  Transaction.transaction(doc.privateKey, receiveAddress, doc.publicKey, amount);
				tr.then((data) => {

					if(data){

						var TR = new Transactions({
						      	txt: data.txId,
										meAddress: doc.publicKey,
										receiveAddress: receiveAddress,
										amount: amount,
										cryptocurrency: 'BTC',
										user: doc._id,
						});

						TR.save((e,x)=> {
						  res.status(200).json({'status': 1, data: TR});
						});

					}

					console.log(data);
				}).catch(err=> {
				 	res.status(200).json({'status': 0, data: err});
				});

		});

	}


	static calculate(res){
		let c =  Calculate();
		c.then((data)=>{
			res.json({
				'status': "1",
				'data': data,
				'message': "Fee rate in Satoshi's per Byte."
			});
		});
		
	}
	

}

export default Btc;