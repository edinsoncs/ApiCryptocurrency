require('../../../../models/TokenModel');

import mongoose from 'mongoose';
const Tokens = mongoose.model('Tokens');

module.exports = (req, res, next) => {

	Tokens.find({}, (e, doc) => {
		res.json(doc);
	})

}