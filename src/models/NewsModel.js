var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsModel = new Schema({
    author: String,
    title: String,
    link: String,
    website: String,
    content: String,
    snippet: String,
    guid: String,
    img: String,
    tag: Array,
    pubDate: String,
	createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('NewsModel', newsModel);