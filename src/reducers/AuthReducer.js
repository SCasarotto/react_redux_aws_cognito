import { AuthKeys } from './../actions/types';

const INITIAL_STATE = { 
	//Form
	signInEmailData : {
		value 		: '',
		valid 		: false,
		validLabel 	: 'Required',
	},
	signInPasswordData : {
		value 		: '',
		valid 		: false,
		validLabel 	: 'Required',
	},

	registerEmailData : {
		value 		: '',
		valid 		: false,
		validLabel 	: 'Required',
	},
	registerPasswordData : {
		value 		: '',
		valid 		: false,
		validLabel 	: 'Required',
	},
	registerPasswordConfirmData : {
		value 		: '',
		valid 		: false,
		validLabel 	: 'Required',
	},

	verifyEmailData : {
		value 		: '',
		valid 		: false,
		validLabel 	: 'Required',
	},
	verifyPasswordData : {
		value 		: '',
		valid 		: false,
		validLabel 	: 'Required',
	},
	verifyCodeData : {
		value 		: '',
		valid 		: false,
		validLabel 	: 'Required',
	},

	forgotEmailData : {
		value 		: '',
		valid 		: false,
		validLabel 	: 'Required',
	},

	//User
	signedIn		: false,
	signedInUser	: null,
};

export default (state = INITIAL_STATE, action) => {
	const {
		//Inputs
		SIGN_IN_EMAIL_CHANGED,
		SIGN_IN_PASSWORD_CHANGED,

		REGISTER_EMAIL_CHANGED,
		REGISTER_PASSWORD_CHANGED,
		REGISTER_PASSWORD_CONFIRM_CHANGED,

		VERIFY_EMAIL_CHANGED,
		VERIFY_CODE_CHANGED,

		FORGOT_EMAIL_CHANGED,

		//Requests
		SIGN_IN_USER_SUCCESS,
		SIGN_IN_USER_FAIL,

		SIGN_OUT_USER_SUCCESS,

		REGISTER_USER_SUCCESS,
		REGISTER_USER_FAIL,

		SEND_FORGOT_PASSWORD_EMAIL_SUCCESS,
		SEND_FORGOT_PASSWORD_EMAIL_FAIL,
	} = AuthKeys;

	switch (action.type) {
		//Inputs
		case SIGN_IN_EMAIL_CHANGED:
			return { ...state, signInEmailData: action.payload };
		case SIGN_IN_PASSWORD_CHANGED:
			return { ...state, signInPasswordData: action.payload };
		case REGISTER_EMAIL_CHANGED:
			return { ...state, registerEmailData: action.payload };
		case REGISTER_PASSWORD_CHANGED:
			return { ...state, registerPasswordData: action.payload };
		case REGISTER_PASSWORD_CONFIRM_CHANGED:
			return { ...state, registerPasswordConfirmData: action.payload };
		case VERIFY_EMAIL_CHANGED:
			return { ...state, verifyEmailData: action.payload };
		case VERIFY_CODE_CHANGED:
			return { ...state, verifyCodeData: action.payload };
		case FORGOT_EMAIL_CHANGED:
			return { ...state, forgotEmailData: action.payload }
		//Requests
		case SIGN_IN_USER_SUCCESS:
			return { ...state, 
				signInEmailData 	: INITIAL_STATE.signInEmailData, 
				signInPasswordData	: INITIAL_STATE.signInPasswordData, 
				signedIn 			: true,
				signedInUser		: action.payload, 
			};
		case SIGN_IN_USER_FAIL:
			return { ...state, 
				signInPasswordData	: INITIAL_STATE.signInPasswordData, 
				signedIn 			: false 
			};
		case SIGN_OUT_USER_SUCCESS:
			return{ 
				...state, 
				signedIn 		: false,
				signedInUser	: INITIAL_STATE.signedInUser, 
			}
		case REGISTER_USER_SUCCESS:
			return { ...state, 
				registerEmailData 				: INITIAL_STATE.registerEmailData, 
				registerPasswordData 			: INITIAL_STATE.registerPasswordData, 
				registerPasswordConfirmData 	: INITIAL_STATE.registerPasswordConfirmData 
			};
		case REGISTER_USER_FAIL:
			return { ...state, 
				registerPasswordData 			: INITIAL_STATE.registerPasswordData, 
				registerPasswordConfirmData 	: INITIAL_STATE.registerPasswordConfirmData 
			};
		case SEND_FORGOT_PASSWORD_EMAIL_SUCCESS:
			return { ...state, 
				forgotEmailData: INITIAL_STATE.forgotEmailData 
			};
		case SEND_FORGOT_PASSWORD_EMAIL_FAIL:
			return { ...state, 
				forgotEmailData: INITIAL_STATE.forgotEmailData 
			};
		default:
			return state;
	}
};

