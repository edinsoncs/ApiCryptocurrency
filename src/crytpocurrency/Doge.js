import CW from 'crypto-wallets';

class Doge{

	constructor(hash, currency, privateKey, publicKey){
		this.hash = hash;
		this.currency = currency;
		this.privateKey = privateKey;
		this.publicKey = publicKey;
	}


	/*
	* Create new wallet in doge
	*/
	static generateWallet(hash){
		var gn = CW.generateWallet('DOGE');
		return new this(hash, gn.currency, gn.privateKey, gn.address);
	}

	/*
	* Obtain details wallet in doge
	*/
	static informationWallet(){

	}

	

}

export default Doge;