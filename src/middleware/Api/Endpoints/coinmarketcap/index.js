require('../../../../models/PricesModel');

import mongoose from 'mongoose';
const CoinMarketCap = require('coinmarketcap-api');
const PricesModel = mongoose.model('PricesModel');
const  url = require('url');

module.exports = (req, res, next) => {

    const url_parts = url.parse(req.url, true);
    let symbol = url_parts.query.symbol;
    if(symbol){

        PricesModel.find({}, (e, data) => {

         data[0]['prices'][0]['data'].map((e,i,a)=>{
            if(e.symbol == symbol.toUpperCase()){
                res.status(200).json(e);
                res.end();
            }
          });

        });

    } else {
        PricesModel.find({}).sort({createdAt: -1}).limit(1).then((data) => {
            res.status(200).json(data);
        });
    }

}