import mongoose from 'mongoose';
import Binance, { ErrorCodes } from 'binance-api-node';


module.exports = (req, res, next) => {


   const { symbol, side, quantity, price, type,
    timeInForce, newClientOrderId, stopPrice, newOrderRespType,
    icebergQty, recvWindow } = req.body;

   if(symbol && side && quantity && price){
    
      const client = Binance({
        apiKey:  process.env.apikey_binance,
        apiSecret: process.env.apisecret_binance
      });

      const TIME = client.time();

      TIME.then((isTIME) => {

            let x = client.orderTest({
              symbol: symbol,
              side: side,
              quantity: quantity,
              price: price,
              ...(type ? {type: type} : {}),
              ...(timeInForce ? {timeInForce: timeInForce} : {}),
              ...(newClientOrderId ? {newClientOrderId: newClientOrderId} : {}),
              ...(stopPrice ? {stopPrice: stopPrice} : {}),
              ...(newOrderRespType ? {newOrderRespType: newOrderRespType} : {}),
              ...(icebergQty ? {icebergQty: icebergQty} : {}),
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

   } else {
     res.status(200).json({status:'Fail', message: 'Check the documentation send me all the required parameters'})
   }

}