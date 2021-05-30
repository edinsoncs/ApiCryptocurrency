import request from'request-json';

module.exports = (address) => {

	let re = address.replace('bitcoincash:','');
	var client = request.createClient('https://rest.bitcoin.com/v2/address/details/');
	

	return new Promise(function(resolve, reject) {
		client.get(`${re}`, function(err, res, body) {
			resolve(body.balance);
		});
	});

}