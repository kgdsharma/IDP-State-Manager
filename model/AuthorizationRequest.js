/** @format */

let AuthorizationRequest = function () {
	this.clientId;
	this.appBaseUrl;
};

AuthorizationRequest.prototype.getClientId = function () {
	return this.clientId;
};
AuthorizationRequest.prototype.setClientId = function (clientId) {
	this.clientId = clientId;
};

AuthorizationRequest.prototype.getappBaseUrl = function () {
	return this.appBaseUrl;
};
AuthorizationRequest.prototype.setappBaseUrl = function (appBaseUrl) {
	this.appBaseUrl = appBaseUrl;
};

module.exports = AuthorizationRequest;
