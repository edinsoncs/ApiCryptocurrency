import request from'request-json';

module.exports = (address) => {
	var client = request.createClient('https://dogechain.info/api/v1/address/balance/');

	return new Promise(function(resolve, reject) {
		client.get(`${address}`, function(err, res, body) {
			resolve(body.balance);
		});
	});

	
}