require('../../../../models/CredentialModel');

import mongoose from 'mongoose';

const CredentialModel = mongoose.model('Credential');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = (req, res, next) => {

    CredentialModel.find({'email': req.body.email}, (err, data) => {
		if(err) {
			return res.status(400).send({
				message: err
			});
		} else {
			continueProcess(data);
		}
	});
    
	let continueProcess = (status) => {
        if(status.length) {
            
            res.json({
                message: 'User already exists',
                status: 0
            });

        } else {
            newProcess();
        }
    }

    let newProcess = () => {
		if(req.body.email && req.body.password) {
			insertDatabase();
		} else {
			return res.status(400).send({
				message: 'Complete the required fields',
				status: 0
			});
		}
	}

    let insertDatabase = () => {

		let userNew = new CredentialModel(req.body);
		userNew.password = bcrypt.hashSync(req.body.password, 10);

		userNew.save((err, user) => {

			if(err) {
				return res.status(400).send({
					message: err
				});
			} else {

				user.hash_password = undefined;
				return res.json({
					id: user._id,
					role: user.role,
					token: jwt.sign({ email: user.email, _id: user._id }, 'apicrypto'),
					email: user.email,
				});
			}
		});
	}

}