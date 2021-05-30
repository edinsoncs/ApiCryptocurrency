import request from'request-json';

module.exports = (address) => {
	var client = request.createClient('https://chain.so/api/v2/get_address_balance/');

	return new Promise(function(resolve, reject) {
		client.get(`btc/${address}`, function(err, res, body) {
		   resolve(body.data.confirmed_balance);
		});
	});
}