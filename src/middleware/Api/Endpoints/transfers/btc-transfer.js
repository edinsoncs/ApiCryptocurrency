require('../../../../models/userModel');

import Btc from '../../../../crytpocurrency/Btc';
import mongoose from 'mongoose';

const User = mongoose.model('UserModel');

module.exports = (req, res, next) => {

	let tr = Btc.transfer(req.body, res);

}