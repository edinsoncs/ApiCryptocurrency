var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var globalModel = new Schema({
	data: Array,
	createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('GlobalModel', globalModel);