require('../../../../models/NewsModel');

import mongoose from 'mongoose';
const NewsModel = mongoose.model('NewsModel');

let Parser = require('rss-parser');
let parser = new Parser();

module.exports = async (req, res, next) => {

    NewsModel.find({},(e, data) => {
        res.json(data);
    }).limit(30).sort({createdAt: -1});
    
}