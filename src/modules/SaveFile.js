import fs from 'fs';
import path from 'path';

module.exports = (dataFile) => {
    let name = getDateString();
    let dr = path.join(__dirname, '..', 'data/', 'keys/' + name);

    return new Promise(function(resolve, reject) {

		fs.writeFile(dr, JSON.stringify(dataFile), (err) => {
			if(!err){
				resolve({ name: name, directory: dr });
			}
		});

	});
}

let getDateString = () => {
	const now = new Date()
	var yyyy = now.getFullYear();
	var mm = now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1); // getMonth() is zero-based
	var dd  = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
	var hh = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
	var mmm  = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
	var ss  = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
	return `${yyyy}${mm}${dd}${hh}${mm}${ss}.json`;
}