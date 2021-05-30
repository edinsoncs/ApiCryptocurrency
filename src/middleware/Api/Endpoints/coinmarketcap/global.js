require('../../../../models/GlobalModel');

import mongoose from 'mongoose';
const CoinMarketCap = require('coinmarketcap-api');
const GlobalModel = mongoose.model('GlobalModel');

module.exports = (req, res, next) => {

    const apiKey = process.env.coinmarketcap;
    const client = new CoinMarketCap(apiKey);
     
    GlobalModel.find({}).sort({createdAt: -1}).limit(1).then((data) => {
        res.status(200).json(data);
    });
    
}