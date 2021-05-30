import request from'request-json';
let key = 'ef33cd3b9a51';

module.exports = (address) => {
	console.log(address);
	var client = request.createClient('https://chainz.cryptoid.info/ltc/api.dws?q=getbalance&a='+address);

	return new Promise(function(resolve, reject) {
		client.get('', function(err, res, body) {
			resolve(body);
		});
	});

	
}