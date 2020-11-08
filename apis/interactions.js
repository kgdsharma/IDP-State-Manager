/** @format */

const AuthorizationRequest = require('../model/AuthorizationRequest');
const AuthorizationResponse = require('../model/AuthorizationResponse');
const User = require('../model/UserInfo');
const Store = require('../auxiliaries/store');

module.exports = (router) => {
	router.put('/api/interaction', (req, res) => {
		let AuthRequest = new AuthorizationRequest();
		AuthRequest.setappBaseUrl(req.body.baseurl);
		AuthRequest.setClientId(req.body.clientId);

		let AuthResponse = new AuthorizationResponse();
		AuthResponse.setUserAuthenticated(req.body.authenticated || false);
		AuthResponse.setauthorizedScopes(req.body.scopes || null);

		let AuthenticatedUser = new User();
		AuthenticatedUser.setIdentity(req.body.username || null);

		var interaction = {
			AuthorizationRequest: AuthRequest,
			AuthorizationResponse: AuthResponse,
			User: AuthenticatedUser,
		};

		Store.saveAuth(interaction, (interactionId) => {
			res.send(interactionId);
		});
	});

	router.get('/api/interaction/:interactionId', (req, res) => {
		Store.authInfo(req.params.interactionId, (authInfo) => {
			res.send(authInfo);
		});
	});

	router.post('/api/interaction/:interactionId', (req, res) => {
		Store.updateAuth(req.params.interactionId, req.body, (interactionId) => {
			res.send(interactionId);
		});
	});
};
