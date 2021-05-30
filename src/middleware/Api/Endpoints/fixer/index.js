require('../../../../models/CurrencyModel');

import mongoose from 'mongoose';
const CurrencyModel = mongoose.model('CurrencyModel');

module.exports = (req, res, next) => {

    CurrencyModel.find({}).sort({createdAt: -1}).limit(1).then((data) => {
        res.status(200).json(data);
    });

}