const crypto = require("crypto");
module.exports = (length) => {
   return crypto.randomBytes(length).toString('hex');
}