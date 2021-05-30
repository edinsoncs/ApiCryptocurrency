import express from 'express';
import mongoose from 'mongoose';

const r = express.Router();
const rateLimit = require("express-rate-limit");


const apiLimiter = rateLimit({
    windowMs: process.env.minutes * 60 * 1000, // 15 minutes
    max: process.env.limit
});


 
r.use('/', apiLimiter, require('./Endpoints'));



module.exports = r;
