require('../../../../models/SymbolModel');

import mongoose from 'mongoose';
const SymbolModel = mongoose.model('SymbolModel');

module.exports = (req, res, next) => {

    const { insert, data } = req.body;

    if(insert){
        
        var symbol = new SymbolModel({
            country: data
        });

        symbol.save(() => {
            res.json({status: true});
        });

    } else {

        SymbolModel.find({}).then((data) => {
            res.status(200).json(data);
        });

    }

}