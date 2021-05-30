import Tokens from '../../../../crytpocurrency/Tokens';
import mongoose from 'mongoose';
import erc20 from 'erc20-wallet';

module.exports = (req, res, next) => {
	let T = Tokens.transfer(req.body, res);
}