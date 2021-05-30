import Btc from '../../../../crytpocurrency/Btc';
import mongoose from 'mongoose';

module.exports = (req, res, next) => {
	let B = Btc.calculate(res);
}