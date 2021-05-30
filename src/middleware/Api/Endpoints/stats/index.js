import mongoose from 'mongoose';
import Binance from 'binance-api-node';


module.exports = (req, res, next) => {

    const { symbol } = req.body;

    const client = Binance();
    const client2 = Binance({
      apiKey:  process.env.apikey_binance,
      apiSecret: process.env.apisecret_binance
    });


    if(symbol){
        let prices = client.dailyStats({ symbol: symbol });

        prices.then((data) => {
            res.status(200).
            json({data:data, status: 'ok'});
        });

    } else{
        res.status(200).
            json({data:null, status: 'false'});
    }
    

    
}