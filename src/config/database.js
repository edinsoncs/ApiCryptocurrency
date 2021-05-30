import mongoose from 'mongoose';

/**
 * Connect
 * @return {[boolean]} [status connect database]
 */

module.exports.connnect = () => {

    mongoose.set('useFindAndModify', false);
    mongoose.connect('mongodb://localhost:27017/crypton', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, function(err, res) {
        if (err) throw err;
        console.log('Connect database mongoose');
    });

}