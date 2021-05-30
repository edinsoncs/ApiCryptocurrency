require('../models/userModel');
require('../models/Transactions');

import CW from 'crypto-wallets';
import erc20 from 'erc20-wallet';
import fs from 'fs';
import mongoose from 'mongoose';

import Hash from '../modules/Hash';
import Str from '../modules/String';
import File from '../modules/SaveFile';


const User = mongoose.model('UserModel');
const Transactions = mongoose.model('Transactions');

erc20.provider = 'https://mainnet.infura.io/v3/c03841c3f32e45d28b0704b508c248b5';

class Eth{

	constructor(hash, currency, privateKey, publicKey, balance){
		this.hash = hash;
		this.currency = currency;
		this.privateKey = privateKey;
		this.publicKey = publicKey;
		this.balance = balance;
	}


	/*
	* Create new wallet in eth
	*/
	static generateWallet(hash){

		return new Promise(function(resolve, reject) {

			erc20.password = Str(10);
			erc20.mySeed = Hash(16);


			//Create seed and save
			erc20.createSeed().then((seed) => {
		        erc20.seed = seed;
		     
		     	//Create key and save local file
		        erc20.createdStored().then((key) => {
			        erc20.keystore = key;
			        
			      	//Save file and encodejSON
			        erc20.encodeJson().then((encodeKey) => {

			        	let nameFile = File(encodeKey);
			        	nameFile.then((result) => {

			        		//Generate Address
			        		erc20.generateAddress().then((address) => {
			        		erc20.address = address;
							    let obj = {
				        			mySeed: erc20.mySeed,
				        			password: erc20.password,
				        			keystore: encodeKey,
				        			nameFile: result.name,
				        			directory: result.directory,
				        			address: address
				        		}

				        		resolve(obj);

							}).catch((error) => {
							     console.error(error);
							});

			        	});

				    }).catch((error) => {
				        console.error(error);
				    });


			    }).catch((error) => {
			        console.error(error);
			    });


		    }).catch((error) => {
		        console.error(error);
		    });


		});

	}

	/*
	* Transfer eth
	*/
	static transfer(body, res){

		const { hash, receiveAddress, amount, gasPrice, gasLimit } = body;

		User.findOne({
			'hash': hash,
			'currency': 'ETH'
		}, (e, doc) => {

			if(doc){

				erc20.keystoreJson = JSON.parse(doc.keystore);
				erc20.decodeJson().then((key) => {
			        erc20.keystore = key;
			        erc20.sendETH(doc.password, doc.publicKey, receiveAddress, amount, gasPrice, gasLimit).then((rep) => {

					      var TR = new Transactions({
					      	txt: rep,
									meAddress: doc.publicKey,
									receiveAddress: receiveAddress,
									amount: amount,
									gasPrice: gasPrice,
									gasLimit: gasLimit,
									cryptocurrency: 'ETH',
									user: doc._id,
					      });

					      TR.save((e,x)=> {
					      	res.status(200).json({'status': 1, data: TR});
					      });

					    }).catch((sendErr) => {
					    		res.status(200).
					    		json({'status': 0, 'message': sendErr});
					    });
			    }).catch((error) => {
			        console.error(error);
			    });

			} else {

				res.status(200).
				json({'status': 0,'message': 'Sorry, no wallet found on eth'});
			}

		});

		
	}

	/*
	* Obtain details wallet in eth
	*/
	static informationWallet(doc, res){

		return new Promise(resolve => {

			erc20.getBalanceAddress(doc.publicKey).then((balanceActuality) => {

				setTimeout(() => {
			        resolve(balanceActuality);
			    }, 500);
	        
		    }).catch((error) => {
		        console.log(error);
		    });

	    });

	}

	

}

export default Eth;