import mongoose from 'mongoose';
import Binance from 'binance-api-node';


module.exports = (req, res, next) => {

    const client = Binance();
    const client2 = Binance({
      apiKey:  process.env.apikey_binance,
      apiSecret: process.env.apisecret_binance
    });

    let prices = client.prices();

    prices.then((data) => {
        res.status(200).
        json({data:data, status: 'ok'});
    });
}