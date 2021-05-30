require('../../../../models/CredentialModel');

import mongoose from 'mongoose';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const CredentialModel = mongoose.model('Credential');


module.exports = (req, res, next) => {

	CredentialModel.findOne({
		email: req.body.email
	}, (err, user) => {

		if(err) throw err;

		if (!user || !user.comparePassword(req.body.password)) {
	      return res.status(401).json({ message: 'Fail access' });
	    }

		return res.json({
			id: user._id,
			type: user.role,
            status: user.status,
			token: jwt.sign({ email: user.email, name: user.name, _id: user._id }, 'apicryptoilimit'),
			email: user.email
		});

	});

}