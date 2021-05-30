import mongoose from 'mongoose';
import Binance, { ErrorCodes } from 'binance-api-node';


module.exports = (req, res, next) => {


   const { asset, status, startTime, endTime, recvWindow } = req.body;

   
    
      const client = Binance({
        apiKey:  process.env.apikey_binance,
        apiSecret: process.env.apisecret_binance
      });

      const TIME = client.time();

      TIME.then((isTIME) => {

            let x = client.withdrawHistory({
                ...(asset ? {asset: asset} : {}),
                ...(startTime ? {startTime: startTime} : {}),
                ...(endTime ? {endTime: endTime} : {}),
                ...(recvWindow ? {recvWindow: recvWindow} : {})
            });
        
            x.then((data) => {
              res.status(200).json({status:'ok', data: data});
            }).catch(function(e) {
              res.status(200).json({status:'Fail', message:e});
            }).then(function(){
              console.log('...');
            }, function () {
              console.log('..');
            });
          
      }); 

  

}