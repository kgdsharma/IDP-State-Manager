/** @format */

let AuthorizationRequest = function () {
	this.userAuthenticated;
	this.authorizedScopes;
};
AuthorizationRequest.prototype.isUserAuthenticated = function () {
	return this.userAuthenticated;
};

AuthorizationRequest.prototype.setUserAuthenticated = function (
	userAuthenticated
) {
	this.userAuthenticated = userAuthenticated;
};

AuthorizationRequest.prototype.getauthorizedScopes = function () {
	return this.authorizedScopes;
};

AuthorizationRequest.prototype.setauthorizedScopes = function (
	authorizedScopes
) {
	this.authorizedScopes = authorizedScopes;
};

module.exports = AuthorizationRequest;
