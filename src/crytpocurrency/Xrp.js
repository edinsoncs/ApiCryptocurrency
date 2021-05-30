const RippleProvider = require("xrp-provider").default;
const rippleProvider = new RippleProvider('mainnet'); 
import Hash from '../modules/Hash';

class Xrp{

	constructor(){

	}


	/*
	* Create new wallet in xrp
	*/
	generateWallet(){

		//Private key start
		const privateKey = rippleProvider.createPrivateKey();

		/* mnemonic xrp */
		let mnemonic = rippleProvider.generateMnemonic()
		const keyMnemonic = rippleProvider.createPrivateKeyFromMnemonic(mnemonic);
		/* mnemonic xrp */

		/* Create private key secret */
		let secret = rippleProvider.generateSecret()
		const WalletprivateKey = rippleProvider.createPrivateKeyFromSecret(secret);
 		/* Create private key secret */

 		/* Create public key */
 		const publicKey = rippleProvider.createPublicKey(privateKey);
 		/* Create public key */

 		/* Create address */
 		const address = rippleProvider.getAddress(publicKey);
 		/* Create address */

 		/* Create address from secret */
 		const address_secret = rippleProvider.getAddressFromSecret(secret);
 		/* Create address from secret */

 		/* Get balance */
 		//const balance = rippleProvider.getBalance(address);
 		/* Get balance */

 		return {
 			privateKey: WalletprivateKey,
 			publicKey: publicKey,
 			address: address,
 			addressSecret: address_secret,
 			mnemonic: mnemonic,
 			keyMnemonic: keyMnemonic,
 			currency: 'XRP'
 		}


		return 'developer';

	}

	/*
	* Obtain details wallet in xrp
	*/
	informationWallet(){

	}

}

export default Xrp;