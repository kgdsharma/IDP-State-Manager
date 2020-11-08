/** @format */

let User = function () {
	this.sub;
};

User.prototype.getIdentity = function () {
	return this.sub;
};

User.prototype.setIdentity = function (identity) {
	this.sub = identity;
};

module.exports = User;
