'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


let CredentialSchema = new Schema({
	username: String,
	name: String,
    surname: String,
	email: String,
	password: String,
	role: Boolean,
    status: Boolean,
	avatar: String,
	city: String,
	create: {type: Date, default: Date.now},

});

CredentialSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

mongoose.model('Credential', CredentialSchema);