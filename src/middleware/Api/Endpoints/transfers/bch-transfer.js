require('../../../../models/userModel');

import Bch from '../../../../crytpocurrency/Bch';
import mongoose from 'mongoose';

const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {

	let tr = Bch.transfer(req.body, res);

}