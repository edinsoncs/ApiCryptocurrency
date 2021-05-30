import Tokens from '../../../../crytpocurrency/Tokens';
import mongoose from 'mongoose';

module.exports = (req, res, next) => {
	let T = Tokens.create(req.body, res);
}