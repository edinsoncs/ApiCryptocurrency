module.exports = (req, res, next) => {
    if(typeof req.user === 'undefined') {
        res.json({status: 0, message: 'No accesss'});
        res.end();
	} else {
		return true;
	}
}