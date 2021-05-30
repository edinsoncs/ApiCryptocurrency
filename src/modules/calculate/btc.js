import request from'request-json';

module.exports = () => {
	var url = request.createClient('https://bitcoinfees.earn.com/api/');
	let api = 'v1/fees/recommended';

	return new Promise(function(resolve, reject) {
		url.get(`${api}`, function(err, res, body) {
			resolve(body);
		});
	});

}