import mongoose from 'mongoose';
const qr = require('qr-image');

module.exports = (req, res, next) => {

    const { data} = req.body;    
    var qr_svg = qr.image(data, { type: 'svg' });
    let dateTime = new Date().getTime();
    let isName = dateTime + '.svg';
    const name_image = `public/qr/${isName}`;
    qr_svg.pipe(require('fs').createWriteStream(name_image));
    
    res.status(200).json({
        status: true,
        data: {
            image: isName
        }
    });

}