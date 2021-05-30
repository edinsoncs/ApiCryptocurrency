require('../../../../models/PricesModel');

import mongoose from 'mongoose';
const CoinMarketCap = require('coinmarketcap-api');
const PricesModel = mongoose.model('PricesModel');

module.exports = (req, res, next) => {

    const apiKey = process.env.coinmarketcap;
    const client = new CoinMarketCap(apiKey);
     
    client.getTickers({limit: 400}).then((data) => {
        
        if(data){
            let prices = new PricesModel({
                prices: data
            });

            prices.save(() => {
                res.json({status:'done'});
            });
        }

    }).catch(console.error);
}