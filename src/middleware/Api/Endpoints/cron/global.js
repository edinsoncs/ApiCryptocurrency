require('../../../../models/GlobalModel');

import mongoose from 'mongoose';
const CoinMarketCap = require('coinmarketcap-api');
const GlobalModel = mongoose.model('GlobalModel');

module.exports = (req, res, next) => {

    const apiKey = process.env.coinmarketcap;
    const client = new CoinMarketCap(apiKey);
     
    client.getGlobal().then((doc) => {
        
        if(doc){
            let global = new GlobalModel({
                data: doc
            });

            global.save(() => {
                res.json({status:'done'});
            });
        }

    }).catch(console.error);
}