import mongoose from 'mongoose';

/**
 * Connect
 * @return {[boolean]} [status connect database]
 */

module.exports.connect = () => {
    const { MONGODB_URI = 'mongodb://localhost:27017/crypton' } = process.env;

    mongoose.set('useFindAndModify', false);
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        if (err) throw err;
        console.log('Connect database mongoose');
    });
};