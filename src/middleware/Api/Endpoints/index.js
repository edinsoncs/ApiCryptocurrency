import express from 'express';
const r = express.Router();
const verify = require('../../../modules/LoginVerify');


/**
 * Methods Get Default
*/
r.route('/')
.get(require('./home'));


/**
 * Methods Register User
*/
r.route('/credential')
.post(require('./credential'));



/**
 * Methods Register User
*/
r.route('/access')
.post(require('./access'));




/*
 * Method get BTC
*/
r.route('/btc')
.post(verify,require('./btc'));


/*
 * Method get BTC
*/
r.route('/bch')
.post(verify,require('./bch'));



/*
 * Method get DOGE
*/
r.route('/doge')
.post(verify,require('./doge'));


/*
 * Method get ETH
*/
r.route('/eth')
.post(verify,require('./eth'));


/*
 * Method get LTC
*/
r.route('/ltc')
.post(verify,require('./ltc'));


/*
 * Method get XMR
*/
r.route('/xmr')
.post(verify,require('./xmr'));


/*
 * Method get IOTA
*/
r.route('/iota')
.post(verify,require('./iota'));


/*
 * Method get PPC
*/
r.route('/ppc')
.post(verify,require('./ppc'));




/*
 * Method get XRP
*/
r.route('/xrp')
.post(verify,require('./xrp'));



/*
* New transactions all cryptocurrency
*/
r.route('/transfer/eth')
.post(verify,require('./transfers/eth-transfer'));


r.route('/transfer/btc')
.post(verify,require('./transfers/btc-transfer'));


r.route('/transfer/bch')
.post(verify,require('./transfers/bch-transfer'));


r.route('/transfer/bch')
.post(verify,require('./transfers/bch-transfer'));


/*
* New transactions all cryptocurrency
*/





/*
* Calculate Fees Transactions in Cryptocurrency
*/

r.route('/calculate/btc')
.get(verify,require('./calculate/btc'));



/* CREATE TOKENS ERC-20 IN ETHEREUM */


//List all tokens
r.route('/tokens')
.get(verify,require('./tokens/tokens'));


//Create new token
r.route('/tokens/new')
.post(verify,require('./tokens/new-token'));


//Balance in token
r.route('/tokens/balance')
.post(verify,require('./tokens/balance-token'));


//Calculate gas in eth
r.route('/tokens/calculate')
.post(verify,require('./tokens/calculate-eth'));

//Calculate gas in Token Eth
r.route('/tokens/calculate-token')
.post(verify,require('./tokens/calculate-token'));



/*
* New transaction in erc-20 tokens eth
*/

r.route('/transfer/tokens')
.post(verify,require('./tokens/transfer-tokens'));


/* CREATE TOKENS ERC-20 IN ETHEREUM */





/*
* BINANCE
*/

r.route('/binance/buy')
.post(verify,require('./buy'));

r.route('/binance/prices')
.get(verify,require('./prices'));

r.route('/binance/candles')
.post(verify,require('./candles'));

r.route('/binance/trades')
.post(verify,require('./trades'));

r.route('/binance/stats')
.post(verify,require('./stats'));

r.route('/binance/agvprice')
.post(verify,require('./agvprice'));

r.route('/binance/getorder')
.post(verify,require('./getorder'));

r.route('/binance/allorder')
.post(verify,require('./allorder'));

r.route('/binance/withdraw')
.post(verify,require('./withdraw'));


r.route('/binance/withdrawhistory')
.post(verify,require('./withdrawhistory'));


/*
* BINANCE
*/


/*
* COINMARKETCAP
*/



/*
* COINMARKETCAP
*/

r.route('/coinmarketcap')
.get(verify,require('./coinmarketcap'));


r.route('/coinmarketcap/global')
.get(verify,require('./coinmarketcap/global'));


/*
* COINMARKETCAP
*/


/*
* COINMARKETCAP
*/

r.route('/fixer')
.get(verify,require('./fixer'));

/*
* COINMARKETCAP
*/


/*
* CRON
*/

r.route('/cron/coinmarketcap')
.get(verify,require('./cron'));

r.route('/cron/fixed')
.get(verify,require('./cron/fixer'));

r.route('/cron/news')
.get(verify,require('./cron/news'));

r.route('/cron/global')
.get(verify,require('./cron/global'));


/*
* CRON
*/




/*
* NEWS
*/


r.route('/news/')
.get(verify,require('./news/'));


/*
* NEWS
*/

/*
* ETHERSCAN
*/

r.route('/etherscan/history')
.post(verify,require('./etherscan/history'));

/*
* ETHERSCAN
*/



/*
* SYMBOL
*/

r.route('/symbol')
.post(verify,require('./symbol'));

/*
* SYMBOL
*/


/*
* GENERATE CODE QR
*/

r.route('/qr')
.post(verify,require('./qr'));

/*
* GENERATE CODE QR
*/


module.exports = r;