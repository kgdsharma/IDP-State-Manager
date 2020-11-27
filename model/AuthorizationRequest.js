/** @format */

let AuthorizationRequest = function () {
	this.clientId;
	this.appBaseUrl;
	this.response_type;
	this.req_scope;
	this.redirect_uri;
	this.req_state;
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

AuthorizationRequest.prototype.getResponseType = function () {
	return this.response_type;
};
AuthorizationRequest.prototype.setResponseType = function (response_type) {
	this.response_type = response_type;
};

AuthorizationRequest.prototype.getRequestScope = function () {
	return this.req_scope;
};
AuthorizationRequest.prototype.setRequestScope = function (req_scope) {
	this.req_scope = req_scope;
};

AuthorizationRequest.prototype.getRedirectUri = function () {
	return this.redirect_uri;
};
AuthorizationRequest.prototype.setRedirectUri = function (redirect_uri) {
	this.redirect_uri = redirect_uri;
};

AuthorizationRequest.prototype.getRequestState = function () {
	return this.req_state;
};
AuthorizationRequest.prototype.setRequestState = function (req_state) {
	this.req_state = req_state;
};

module.exports = AuthorizationRequest;
