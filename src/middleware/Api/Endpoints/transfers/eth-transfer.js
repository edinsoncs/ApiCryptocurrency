require('../../../../models/userModel');

import eth from '../../../../crytpocurrency/Eth';
import mongoose from 'mongoose';

const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {

	let tr = eth.transfer(req.body, res);

}