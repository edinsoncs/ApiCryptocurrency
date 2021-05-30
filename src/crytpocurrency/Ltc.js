import CW from 'crypto-wallets';

class Ltc{

	constructor(hash, currency, privateKey, publicKey){
		this.hash = hash;
		this.currency = currency;
		this.privateKey = privateKey;
		this.publicKey = publicKey;
	}


	/*
	* Create new wallet in Iota
	*/
	static generateWallet(hash){
		var gn = CW.generateWallet('LTC');
		return new this(hash, gn.currency, gn.privateKey, gn.address);
	}

	/*
	* Obtain details wallet in eth
	*/
	static informationWallet(){

	}

	

}

export default Ltc;