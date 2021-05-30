require('../../../../models/CurrencyModel');

import mongoose from 'mongoose';
const CoinMarketCap = require('coinmarketcap-api');
const PricesModel = mongoose.model('CurrencyModel');

const fixer = require("fixer-api");

module.exports = (req, res, next) => {

    const data = fixer.latest({ access_key: process.env.fixer});
    
    data.then((data) => {

        let prices = new PricesModel({
            data: data
        });

        prices.save((data) => {
            res.status(200).json({status:true});
        });
        
    });

  
}