require('../models/TokenModel');
require('../models/userModel');

import erc20 from 'erc20-wallet';
import Hash from '../modules/Hash';
import mongoose from 'mongoose';

const Token = mongoose.model('Tokens');
const User = mongoose.model('UserModel');

erc20.provider = 'https://mainnet.infura.io/v3/c03841c3f32e45d28b0704b508c248b5';

class Tokens{

	constructor(){
	}

	static seed(){
		erc20.password = '25passwordapi25';
		erc20.mySeed = Hash(16);
	}

	//Register new token in apicryptocurrency
	static create(body, res){

		Token.findOne({
			'tokenAddr': body.address
		}, (e, doc) => {

			if(doc){
				res.status(200).
				json({
					'message': 'A token is already registered',
					'data': doc
				});
			} else {

				let t = new Token({
					tokenSymbol: body.symbol,
					tokenName: body.name,
					tokenDecimals: body.decimals,
					tokenAddr: body.address
				});


				t.save((e,doc) => {
					res.status(200).
					json({
						'message': 'Congratulations, the token is registered',
						'data': doc
					});
				});
			}


		});

	}

	//Balance in All Token
	static balance(body, res){
		let { tkn, address } = body
		Token.findOne({
			'tokenAddr': tkn,
		}, (e, doc) => {

			if(doc){

				erc20.tokenAddr = tkn;
				erc20.getTokenAddress(address).then((balance) => {
			        res.status(200).
					json({
						'message': 'The contract is correct',
						'data': {
							'nameToken': doc.tokenName,
							'symbolToken': doc.tokenSymbol,
							'decimalsToken': doc.tokenDecimals,
							'balance': balance
						}
					});
			    }).catch((error) => {
			        console.error(error);
			    });

				

			} else {
				res.status(200).
				json({
					message: 'The contract or token address is incorrect, please send me another'
				});
			}

		})
	}

	//Calculate gas transfer in ETH
	static calculateTransfer(body, res){


		erc20.calculateGasLimitEth(body.tokenAddr, body.sendAddr, body.amount).then((response) => {
			res.status(200).json({
				message: 'Congratulations, these are the gas commission ETH data right now',
				data: response
			});
		}).catch((error) => {
			res.status(200).json({
				message: 'There was a check the fields you sent'
			});
		});
	}


	//Calculate gas transfer in All Tokens
	static calculateTransferToken(body, res){

		let { hash, tknContract, receiveAddress, amount} = body;

		Token.findOne({
			'tokenAddr': tknContract
		}, (e, doc) => {

			if(doc){
				erc20.tokenAddr = tknContract;
				//erc20.percentageGas = 0;
				erc20.tokenDecimals = doc.tokenDecimals;

				User.findOne({
					'hash': hash,
					'currency': 'ETH'
				}, (x, data) => {

					if(data){

						erc20.keystoreJson = JSON.parse(data.keystore);
						let { publicKey } = data;

						erc20.decodeJson().then((key) => {
			        			erc20.keystore = key;

								erc20.calculateGasLimitToken(doc.publicKey, receiveAddress, amount).then((response) => {
							        
							        res.status(200).json({
										message: 'Congratulations, these are the gas commission TOKEN data right now',
										data: response
									});

							    }).catch((error) => {
							    	console.log(error);
							        res.status(200).json({
										message: 'There was a check the fields you sent'
									});
								});


						 });

					}



				});
			}


		});
		
	}


	//New transfer Token Select
	static transfer(body, res){

		let { hash, receiveAddress, tknContract,
			  amount, gasPrice, gasLimit} = body;

		Token.findOne({
			'tokenAddr': tknContract
		}, (e, doc) => {

			if(doc){

				erc20.tokenAddr = tknContract;
				//erc20.percentageGas = 0;
				erc20.tokenDecimals = doc.tokenDecimals;

				User.findOne({
					'hash': hash,
					'currency': 'ETH'
				}, (x, data) => {

					if(data){

						erc20.keystoreJson = JSON.parse(data.keystore);
						let { publicKey, password } = data;

						erc20.decodeJson().then((key) => {
			        		erc20.keystore = key;

			        		erc20.sendTokens(password, publicKey, receiveAddress, amount, gasPrice, gasLimit).then((rep) => {
						        
						        var TR = new Transactions({
							      	txt: rep,
									meAddress: publicKey,
									receiveAddress: receiveAddress,
									amount: amount,
									gasPrice: gasPrice,
									gasLimit: gasLimit,
									cryptocurrency: 'ETH',
									user: data._id,
									token: doc.id
							    });

							    TR.save((e,x)=> {
							      res.status(200).json({'status': 1, data: TR});
							    });

						        
						    }).catch((sendErr) => {
						        res.status(200).
						        json({'status': 0, 'message': sendErr});
						    });

						 });

					}


				});

			}


		});
	}



}

export default Tokens;