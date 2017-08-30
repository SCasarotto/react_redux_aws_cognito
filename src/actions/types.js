//Auth
export const AuthKeys = {
	//Inputs
	SIGN_IN_EMAIL_CHANGED				: 'auth__sign_in_email_changed',
	SIGN_IN_PASSWORD_CHANGED			: 'auth__sign_in_password_changed',

	REGISTER_EMAIL_CHANGED				: 'auth__register_email_changed',
	REGISTER_PASSWORD_CHANGED 			: 'auth__register_password_changed',
	REGISTER_PASSWORD_CONFIRM_CHANGED	: 'auth__register_password_confirm_changed',

	VERIFY_EMAIL_CHANGED				: 'auth__verify_email_changed',
	VERIFY_PASSWORD_CHANGED 			: 'auth__verify_password_changed',
	VERIFY_CODE_CHANGED					: 'auth__verify_password_changed',

	FORGOT_EMAIL_CHANGED 				: 'auth__forgot_email_changed',

	//Requests
	SIGN_IN_USER_SUCCESS 				: 'auth__sign_in_user_success',
	SIGN_IN_USER_FAIL 					: 'auth__sign_in_user_fail',

	SIGN_OUT_USER_SUCCESS				: 'auth__sign_out_user_success',

	REGISTER_USER_SUCCESS				: 'auth__register_user_success',
	REGISTER_USER_FAIL					: 'auth__register_user_fail',

	VERIFY_EMAIL_CHANGED 				: 'auth__verify_email_success',
	VERIFY_CODE_CHANGED 				: 'auth__verify_code_success',

	SEND_FORGOT_PASSWORD_EMAIL_SUCCESS	: 'auth__send_forgot_password_email_success',
	SEND_FORGOT_PASSWORD_EMAIL_FAIL		: 'auth__send_forgot_password_email_fail',	
}