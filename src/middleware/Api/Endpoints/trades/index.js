import mongoose from 'mongoose';
import Binance from 'binance-api-node';


module.exports = (req, res, next) => {

    const { symbol, limit } = req.body;

    const client = Binance();
    const client2 = Binance({
      apiKey:  process.env.apikey_binance,
      apiSecret: process.env.apisecret_binance
    });

    if(limit){
        let prices = client.trades({ symbol: symbol, limit: limit });
    } else {
        let prices = client.trades({ symbol: symbol });
    }

    

    prices.then((data) => {
        res.status(200).
        json({data:data, status: 'ok'});
    });
}