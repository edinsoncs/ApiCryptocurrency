import mongoose from 'mongoose';
import Binance from 'binance-api-node';


module.exports = (req, res, next) => {

    const client = Binance();
    const client2 = Binance({
      apiKey:  process.env.apikey_binance,
      apiSecret: process.env.apisecret_binance
    });

    const { symbol, interval, limit, startTime, endTime } = req.body;

        if(symbol && !interval && !limit && !startTime && !endTime){
            var candles = client.candles({ symbol: symbol});
        }

        if(symbol && interval && !limit && !startTime && !endTime){
            var candles = client.candles({ symbol: symbol, interval: interval});
        }

        if(symbol && interval && limit && !startTime && !endTime){
            var candles = client.candles({ symbol: symbol, interval: interval, limit: limit});
        }

        if(symbol && interval && limit && startTime && endTime){
            var candles = client.candles({ symbol: symbol, interval: interval, limit: limit, startTime: startTime, endTime: endTime});
        }

   

        candles.then((data) => {
            res.status(200).
            json({data:data, status: 'ok'});
        }).catch((er) => {
            res.status(200).
            json({status: 'fail', data: er});
           
        });

}