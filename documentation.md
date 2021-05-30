# API CRYPTOCURRENCY OPEN SOURCE

The development of this api is created for the exchange , the development contains acceptance of creation of wallets and transactions between any cryptocurrency and any ethereum token, the development is made as a Nodejs base and the information is saved in Mongodb.




## Cryptocurrency
![BTC](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/btc.png)
![BCH](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/bch.png)
![DOGE](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/doge.png)
![ETH](https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/eth.png?raw=true)
![LTC](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/ltc.png)
![XMR](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/xmr.png)
![PPC](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/ppc.png)
![IOTA](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/miota.png)
![XRP](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/xrp.png)


## Tokens
![BNB](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/bnb.png)
![USDT](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/usdt.png)
![LEO](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/leo.png)
![USDC](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/usdc.png)
![HT](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/ht.png)
![VEN](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/vet.png)
![MKR](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/mkr.png)
![LEND](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/lend.png)
![DAI](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/dai.png)
![KNC)](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/knc.png)
![ZRX)](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/zrx.png)
![THETA)](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/theta.png)
![PAX)](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/pax.png)
![REN)](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/ren.png)
![BNT)](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/bnt.png)
![HOT)](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/hot.png)
![ADA)](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/ada.png)
![SNT)](https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/snt.png)



## Requirements

The essential requirements to deploy the project is Nodejs & Mongodb
- [Nodejs](https://nodejs.org/es/download/)
- [MongoDB](https://nodejs.org/es/download/)


## Start project

In production or local we make a clone of the project
```
https://github.com/edinsoncs/Apicryptocurrency
```

> It works in any version of nodejs LTS, NODE 8 and up is recommended


## Install Project
To start the project the dependencies will be installed
```
npm install in folder project
```

Once the installation is done, we are going to install the dev dependencies
```
npm install @babel/core @babel/node @babel/preset-env --save-dev
```
```
npm install eslint eslint-config-airbnb-base eslint-plugin-import --save-dev
```

```
npm install -g nodemon
npm install nodemon --save-dev
```

or we can also do the installation of the dev dependencies in a single line with the following command

```
npm install --only=dev
```

&nbsp;

## List of avaiable methods - Cryptocurrency
| Route | Method | Description |
|--------|--------|--------|
| `/` | `GET` | Hello World Route |
| `1. https://api.domain.com/btc` | `POST` | Create new wallet and obtain information |
| `2. https://api.domain.com/bch` | `POST` | Create new wallet and obtain information |
| `3. https://api.domain.com/doge` | `POST` | Create new wallet and obtain information |
| `4. https://api.domain.com/eth` | `POST` | Create new wallet and obtain information |
| `5. https://api.domain.com/ltc` | `POST` | Create new wallet and obtain information |
| `6. https://api.domain.com/xmr` | `POST` | Create new wallet and obtain information |
| `7. https://api.domain.com/ppc` | `POST` | Create new wallet and obtain information |
| `8. https://api.domain.com/iota` | `POST` | Create new wallet and obtain information |
| `9. https://api.domain.com/xrp` | `POST` | Create new wallet and obtain information |

&nbsp;

## List of avaiable methods - Tokens List and Create
| Route | Method | Description |
|--------|--------|--------|
| `1. https://api.domain.com/tokens` | `GET` | We get all registered tokens |
| `2. https://api.domain.com/tokens/new` | `POST` | We will create a new erc-20 token |

&nbsp;

## List of avaiable methods - Tokens Balance
| Route | Method | Description |
|--------|--------|--------|
| `1. https://api.domain.com/tokens/balance` | `POST` | We get the balance of any ethereum token |



&nbsp;

## List of avaiable methods - Crypto Transaction Fees
| Route | Method | Description |
|--------|--------|--------|
| `1. https://api.domain.com/calculate/btc` | `POST` | We calculate the commission for sending bitcoin|
| `2. https://api.domain.com/tokens/calculate` | `POST` | We get the balance of any ethereum token |
| `3. https://api.domain.com/tokens/calculate-token` | `POST` | We calculate the commission for sending tokens erc-20|



&nbsp;

## List of avaiable methods - Transfer Coins
| Route | Method | Description |
|--------|--------|--------|
| `1. https://api.domain.com/transfer/btc` | `POST` | send bitcoin transactions to a wallet|
| `2. https://api.domain.com/transfer/eth` | `POST` | send eth transactions to a wallet |
| `3. https://api.domain.com/transfer/bch` | `POST` | send bch transactions to a wallet|
| `4. https://api.domain.com/transfer/tokens` | `POST` | send more than 300,000 thousand erc-20 tokens|

&nbsp;

## List of avaiable methods - Etherscan
| Route | Method | Description |
|--------|--------|--------|
| `1. https://api.domain.com/etherscan/history` | `POST` | List history all transactions tokens and ethereum|

&nbsp;

## List of avaiable methods - Binance
| Route | Method | Description |
|--------|--------|--------|
| `1. https://api.domain.com/binance/buy` | `POST` | ... |
| `2. https://api.domain.com/binance/prices` | `GET` | Get the price of all currencies with their pairs |
| `3. https://api.domain.com/binance/candles` | `POST` | get candles according to currency pairs |
| `4. https://api.domain.com/binance/trades` | `POST` | Get recent trades of a symbol. |
| `5. https://api.domain.com/binance/stats` | `POST` | 24 hour price change statistics |
| `6. https://api.domain.com/binance/agvprice` | `POST` | Current average price for a symbol. |
| `7. https://api.domain.com/binance/getorder` | `POST` | Check an order's status. |
| `8. https://api.domain.com/binance/allorder` | `POST` | Get all account orders on a symbol; active, canceled, or filled. |
| `9. https://api.domain.com/binance/withdraw` | `POST` | Triggers the withdraw process (untested for now). |
| `10. https://api.domain.com/binance/withdrawhistory` | `POST` | Get the account withdraw history. |



&nbsp;

### Example: Body of the request

Method 1. Api BTC
```json
{
	"hash": "20x@lmda!.2l"
}
```
Example POSTMAN: New wallet created BTC


![BTC](https://edinsoncs.com/wp-content/uploads/2020/11/hash.png)

&nbsp;


Method 2. Api BCH
```json
{
	"hash": "20x@lmda!.2l"
}
```

Example POSTMAN: New wallet created BCH


![BCH](https://edinsoncs.com/wp-content/uploads/2020/11/hash2.png)

&nbsp;

Method 3. Api DOGE
```json
{
	"hash": "20x@lmda!.2l"
}
```

Example POSTMAN: New wallet created DOGE


![DOGE](https://edinsoncs.com/wp-content/uploads/2020/11/hash3.png)

&nbsp;

Method 4. Api ETH
```json
{
	"hash": "20x@lmda!.2l"
}
```

Example POSTMAN: New wallet created ETH


![ETH](https://edinsoncs.com/wp-content/uploads/2020/11/hash4.png)

&nbsp;


Method 5. Api LTC
```json
{
	"hash": "20x@lmda!.2l"
}
```

Example POSTMAN: New wallet created LTC


![LTC](https://edinsoncs.com/wp-content/uploads/2020/11/hash5.png)

&nbsp;

Method 6. Api XMR
```json
{
	"hash": "20x@lmda!.2l"
}
```

Example POSTMAN: New wallet created XMR


![XMR](https://edinsoncs.com/wp-content/uploads/2020/11/xmr.png)

&nbsp;

Method 7. Api PPC
```json
{
	"hash": "20x@lmda!.2l"
}
```

Example POSTMAN: New wallet created PPC


![PPC](https://edinsoncs.com/wp-content/uploads/2020/11/ppc.png)


&nbsp;


Method 8. Api Iota
```json
{
	"hash": "20x@lmda!.2l"
}
```

Example POSTMAN: New wallet created IOTA


![IOTA](https://edinsoncs.com/wp-content/uploads/2020/11/iota.png)

&nbsp;


Method 9. Api XRP
```json
{
	"hash": "20x@lmda!.2l"
}
```

Example POSTMAN: New wallet created XRP


![XRP](https://edinsoncs.com/wp-content/uploads/2020/11/xrp.png)

&nbsp;


Method 10. Api Tokens - Make only one request


Method 11. Api Tokens New
```json
{
	"symbol": "BNB",
	"name": "Binance",
	"decimals": 18,
	"address": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
}
```

&nbsp;


Method 12. Api Tokens Balance
```json
{	
	"tkn": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
	"address": "0xc4bed42f38213c8d1c385d198e427bd98c3ebf7d" 
}
```

&nbsp;

Method 13. Transfer Balance cost in gas eth
```json
{	
	"tokenAddr": "0x5CfF54a753EC88cf618A9cA5f221B6Ec93Acc005",
	"sendAddr": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
	"amount": "0.0074"
}
```



&nbsp;


## Etherscan

List transaction in ethereum and tokens erc-20


Method 1. History etherscan

```json
{	
	"address": "0x5CfF54a753EC88cf618A9cA5f221B6Ec93Acc005"
}	
```


&nbsp;
&nbsp;
	

## Binance

We will use binance as an api to make inquiries and obtain price information or generate a purchase through the quick trade order.


Method 1. Binance Create Order

Creates a new order.

```json
{	
	"symbol": "XLMETH",
	"side": "BUY",
	"quantity": 100,
	"price": 0.0002
}	
```

&nbsp;

| Param            | Type   | Required | Default  | Description                                                         |
| ---------------- | ------ | -------- | -------- | ------------------------------------------------------------------- |
| symbol           | String | true     |
| side             | String | true     |          | `BUY`,`SELL`                                                        |
| type             | String | false    | `LIMIT`  | `LIMIT`, `MARKET`                                                   |
| quantity         | Number | true     |
| price            | Number | true     |          | Optional for `MARKET` orders                                        |
| timeInForce      | String | false    | `GTC`    | `FOK`, `GTC`, `IOC`                                                 |
| newClientOrderId | String | false    |          | A unique id for the order. Automatically generated if not sent.     |
| stopPrice        | Number | false    |          | Used with stop orders                                               |
| newOrderRespType | String | false    | `RESULT` | Returns more complete info of the order. `ACK`, `RESULT`, or `FULL` |
| icebergQty       | Number | false    |          | Used with iceberg orders                                            |
| recvWindow       | Number | false    |

Additional mandatory parameters based on `type`:

| Type                | Additional mandatory parameters                 |
| ------------------- | ----------------------------------------------- |
| `LIMIT`             | `timeInForce`, `quantity`, `price`              |
| `MARKET`            | `quantity`                                      |
| `STOP_LOSS`         | `quantity`, `stopPrice`                         |
| `STOP_LOSS_LIMIT`   | `timeInForce`, `quantity`, `price`, `stopPrice` |
| `TAKE_PROFIT`       | `quantity`, `stopPrice`                         |
| `TAKE_PROFIT_LIMIT` | `timeInForce`, `quantity`, `price`, `stopPrice` |
| `LIMIT_MAKER`       | `quantity`, `price`                             |

- `LIMIT_MAKER` are `LIMIT` orders that will be rejected if they would immediately match and trade as a taker.
- `STOP_LOSS` and `TAKE_PROFIT` will execute a `MARKET` order when the `stopPrice` is reached.
- Any `LIMIT` or `LIMIT_MAKER` type order can be made an iceberg order by sending an `icebergQty`.
- Any order with an `icebergQty` MUST have `timeInForce` set to `GTC`.


&nbsp;

Method 2. Binance Prices

We will do a query using get and it will return the price list with the binance pairs

&nbsp;

Method 3. Binance Candles
&nbsp;


```json
{	
	"symbol": "ETHBTC", 
	"interval": "1m",
	"limit": 1,
}	
```

&nbsp;

We can add some functionalities to our query

| Param     | Type   | Required | Default | Description                                                                                    |
| --------- | ------ | -------- | ------- | ---------------------------------------------------------------------------------------------- |
| symbol    | String | true     |
| interval  | String | false    | `5m`    | `1m`, `3m`, `5m`, `15m`, `30m`, `1h`, `2h`,<br>`4h`, `6h`, `8h`, `12h`, `1d`, `3d`, `1w`, `1M` |
| limit     | Number | false    | `500`   | Max `1000`                                                                                     |
| startTime | Number | false    |
| endTime   | Number | false    |

&nbsp;

Method 4. Binance Trades

```json
{	
	"symbol": "ETHBTC"
}	
```

&nbsp;

| Param  | Type   | Required | Default | Description |
| ------ | ------ | -------- | ------- | ----------- |
| symbol | String | true     |
| limit  | Number | false    | `500`   | Max `500`   |


Method 5. Binance Stats

```json
{	
	"symbol": "ETHBTC"
}	
```

&nbsp;

| Param  | Type   | Required |
| ------ | ------ | -------- |
| symbol | String | false    |



Method 6. Binance AvgPrice

```json
{	
	"symbol": "ETHBTC"
}	
```

&nbsp;

| Param  | Type   | Required |
| ------ | ------ | -------- |
| symbol | String | true     |


&nbsp;

Method 7. Binance GetOrder

```json
{
	
    "symbol": "BNBETH",
    "orderId": 50167927
}	
```

&nbsp;

| Param             | Type   | Required | Description                                 |
| ----------------- | ------ | -------- | ------------------------------------------- |
| symbol            | String | true     |
| orderId           | Number | true     | Not required if `origClientOrderId` is used |
| origClientOrderId | String | false    |
| recvWindow        | Number | false    |



&nbsp;

Method 8. Binance AllOrder

```json
{
	
    "symbol": "ETHBTC",
}	
```

&nbsp;

| Param      | Type   | Required | Default | Description                                                                            |
| ---------- | ------ | -------- | ------- | -------------------------------------------------------------------------------------- |
| symbol     | String | true     |
| orderId    | Number | false    |         | If set, it will get orders >= that orderId. Otherwise most recent orders are returned. |
| limit      | Number | false    | `500`   | Max `500`                                                                              |
| recvWindow | Number | false    |


&nbsp;


Method 9. Triggers the withdraw process (untested for now).

```json
{
	"asset": "ETH",
    "address": "0x5CfF54a753EC88cf618A9cA5f221B6Ec93Acc005",
    "amount": 100
}	
```

&nbsp;

| Param      | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| asset      | String | true     |
| address    | String | true     |
| amount     | Number | true     |
| name       | String | false    | Description of the address |
| recvWindow | Number | false    |


&nbsp;


Method 10. Get the account withdraw history.

```json
{
	
}	
```

&nbsp;

| Param      | Type   | Required | Description                                                                                                |
| ---------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------- |
| asset      | String | false    |
| status     | Number | false    | 0 (0: Email Sent, 1: Cancelled 2: Awaiting Approval, 3: Rejected, 4: Processing, 5: Failure, 6: Completed) |
| startTime  | Number | false    |
| endTime    | Number | false    |
| recvWindow | Number | false    |
