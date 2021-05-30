import request from'request-json';

module.exports = (address) => {
   
	var client = request.createClient('https://api.etherscan.io/api?module=account&action=txlist&address='+address+'&startblock=0&endblock=99999999&sort=asc&apikey='+process.env.etherscan);

	return new Promise(function(resolve, reject) {
		client.get('', function(err, res, body) {
            resolve(body);
		});
	});

	
}