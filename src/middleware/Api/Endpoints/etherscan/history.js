
import mongoose from 'mongoose';
import History from '../../../../modules/History';

module.exports = (req, res, next) => {

    const { address } = req.body;
 
    let isHistory = History(address);

    isHistory.then((data) => {
        res.status(200).json({data:data, status: 'ok'});
    });

}