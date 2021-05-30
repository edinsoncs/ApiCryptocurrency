import request from'request-json';
let key = 'ef33cd3b9a51';

module.exports = (address) => {
	var client = request.createClient('https://chainz.cryptoid.info/ppc/api.dws?q=getbalance&a='+address+'&key='+key);

	return new Promise(function(resolve, reject) {
		client.get('', function(err, res, body) {
			resolve(body);
		});
	});

	
}