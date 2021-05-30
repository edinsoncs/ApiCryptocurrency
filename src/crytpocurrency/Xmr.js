import CW from 'crypto-wallets';

class Xmr{

	constructor(hash, currency, privateKey, publicKey, mnemonic, privateViewKey){
		this.hash = hash;
		this.currency = currency;
		this.privateKey = privateKey;
		this.publicKey = publicKey;
		this.mnemonic = mnemonic;
		this.privateViewKey = privateViewKey;
	}


	/*
	* Create new wallet in Iota
	*/
	static generateWallet(hash){
		CW.generateWallet('XMR').then(function(gn){
			return  new this(hash, gn.currency, gn.privateKey, gn.address, gn.mnemonic, gn.privateViewKey);
		});
	}

	/*
	* Obtain details wallet in eth
	*/
	static informationWallet(){

	}

	

}

export default Xmr;