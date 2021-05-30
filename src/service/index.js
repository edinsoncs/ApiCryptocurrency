import express from 'express';
import bodyParser from 'body-parser';

import mongodb from 'mongodb';
import mongoose from 'mongoose';
import database from '../config/database';
import cookieParser from 'cookie-parser';

database.connnect();

const app = express();
const schedule = require('node-schedule');
const superagent = require('superagent');
const jsonwebtoken = require("jsonwebtoken");
const path = require('path');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});


app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(function(req, res, next) {

    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'a-p-i-crpyo20', function(err, decode) {
            if (err)req.user = undefined;
            console.log('ingrese');
            req.user = decode;
            next();
        });
   
    } else {
        req.user = undefined;
        next();
    }
    
});


const { PORT = 80 } = process.env;
require('dotenv').config();

require('../middleware')(app);

schedule.scheduleJob('*/10 * * * *', function(fireDate){
    superagent.get('api.crypton10.com/cron/coinmarketcap').then().catch(console.error);
});

schedule.scheduleJob('*/60 * * * *', function(fireDate){
    superagent.get('api.crypton10.com/cron/fixed').then().catch(console.error);
    superagent.get('api.crypton10.com/cron/global').then().catch(console.error);
});

schedule.scheduleJob('*/10 * * * *', function(fireDate){
    superagent.get('api.crypton10.com/cron/news').then().catch(console.error);
});


app.use('/public', express.static('public'));

app.listen(PORT, () => {
	console.log(`Servidor ready: ${PORT}`);
});
