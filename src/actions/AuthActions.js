import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { push } from 'react-router-redux';

import { AuthKeys } from './types';

import settings from './../config/settings';

export const signInUser = ({email, password, redirect}) => {
	const { 
		SIGN_IN_USER_SUCCESS,
		SIGN_IN_USER_FAIL,
	} = AuthKeys;

	return (dispatch) => {
	    var authenticationData = {
	        Username : email,
	        Password : password,
	    };
	    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

	    var poolData = {
	    	UserPoolId : settings.UserPoolId, 
	    	ClientId : settings.ClientId 
	    };
	    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	    var userData = {
	        Username : email,
	        Pool : userPool
	    };
	    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

	    cognitoUser.authenticateUser(authenticationDetails, {
	        onSuccess: function (result) {
	            console.log('access token + ' + result.getAccessToken().getJwtToken());

				dispatch(push(redirect))
				dispatch({
					type 	: AuthKeys.SIGN_IN_USER_SUCCESS,
					payload : cognitoUser
				});
	        },

	        onFailure: function(err) {
	            alert(err);
	        },

	    });
	}
}

export const signOutUser = () => {
	const { SIGN_OUT_USER_SUCCESS } = AuthKeys;
	return (dispatch, getState) => {
		const cognitoUser = getState().Auth.signedInUser;
		cognitoUser.signOut();
		dispatch({ type: SIGN_OUT_USER_SUCCESS });
		dispatch(push('/'));
	}
}

export const registerUser = ({email, password}) => {
	const { 
		REGISTER_USER_SUCCESS,
		REGISTER_USER_FAIL
	} = AuthKeys;

	return (dispatch) => {
	    var poolData = {
	    	UserPoolId : settings.UserPoolId, 
	    	ClientId : settings.ClientId
	    };
	    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	    var attributeList = [];

	    var dataEmail = {
	        Name : 'email',
	        Value : email
	    };

	    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

	    attributeList.push(attributeEmail);

	    userPool.signUp(email, password, attributeList, null, function(err, result){
	        if (err) {
	            alert(err);
	            return;
	        }
	        console.log(result.user)
	        console.log('user name is ' + result.user.getUsername());
	    });
	}
}

export const verifyUser = ({email, code}) => {
	const { 
		VERIFY_USER_SUCCESS,
		VERIFY_USER_FAIL
	} = AuthKeys;

	return (dispatch) => {
	    var poolData = {
	    	UserPoolId : settings.UserPoolId, 
	    	ClientId : settings.ClientId 
	    };
	    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	    var userData = {
	        Username : email,
	        Pool : userPool
	    };
	    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

	    cognitoUser.confirmRegistration(code, true, function(err, result) {
	        if (err) {
	            alert(err);
	            return;
	        }
	        console.log('call result: ' + result);
	    });
	}
}