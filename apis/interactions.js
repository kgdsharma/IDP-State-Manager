/** @format */

const AuthorizationRequest = require('../model/AuthorizationRequest');
const AuthorizationResponse = require('../model/AuthorizationResponse');
const User = require('../model/UserInfo');
const Store = require('../auxiliaries/store');

module.exports = (router) => {
	router.put('/api/interaction', (req, res) => {
		let AuthRequest = new AuthorizationRequest();

		AuthRequest.setAppBaseUrl(req.body.appBaseUrl);
		AuthRequest.setClientId(req.body.client_id);
		AuthRequest.setRedirectUri(req.body.redirect_uri);
		AuthRequest.setRequestScope(req.body.req_scope);
		AuthRequest.setResponseType(req.body.response_type);
		AuthRequest.setRequestState(req.body.req_state);

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
		console.log("GET Interaction>> ", req.params.interactionId )
		Store.authInfo(req.params.interactionId, (authInfo) => {
			res.send(authInfo);
		});
	});

	router.post('/api/interaction/:interactionId', (req, res) => {
		Store.authInfo(req.params.interactionId, (authInfo) => {

			const savedAuthInfo = JSON.parse(authInfo);
			let AuthRequest = new AuthorizationRequest();

			AuthRequest.setAppBaseUrl(savedAuthInfo.AuthorizationRequest.appBaseUrl);
			AuthRequest.setClientId(savedAuthInfo.AuthorizationRequest.clientId);
			AuthRequest.setRedirectUri(
				savedAuthInfo.AuthorizationRequest.redirect_uri
			);
			AuthRequest.setRequestScope(
				savedAuthInfo.AuthorizationRequest.req_scope
			);
			AuthRequest.setResponseType(
				savedAuthInfo.AuthorizationRequest.response_type
			);
			AuthRequest.setRequestState(
				savedAuthInfo.AuthorizationRequest.req_state
			);

			let AuthResponse = new AuthorizationResponse();
			AuthResponse.setUserAuthenticated(req.body.authenticated || false);
			AuthResponse.setauthorizedScopes(
				req.body.scopes || savedAuthInfo.AuthorizationRequest.req_scope
			);

			let AuthenticatedUser = new User();
			AuthenticatedUser.setIdentity(req.body.username || null);

			var interaction = {
				AuthorizationRequest: AuthRequest,
				AuthorizationResponse: AuthResponse,
				User: AuthenticatedUser,
			};

			Store.updateAuth(
				req.params.interactionId,
				interaction,
				(interactionId) => {
					res.send(interactionId);
				}
			);
		});
	});
};
