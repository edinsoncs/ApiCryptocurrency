import mongoose from 'mongoose';
import Binance, { ErrorCodes } from 'binance-api-node';


module.exports = (req, res, next) => {


   const { asset, address, amount, name, recvWindow } = req.body;

   if(asset && address && amount){
    
      const client = Binance({
        apiKey:  process.env.apikey_binance,
        apiSecret: process.env.apisecret_binance
      });

      const TIME = client.time();

      TIME.then((isTIME) => {

            let x = client.withdraw({
              asset: asset,
              address: address,
              amount: amount,
              ...(name ? {name: name} : {}),
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