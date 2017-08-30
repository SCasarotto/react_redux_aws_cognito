import {} from './types';

import { 
	isEmail, 
	isAtLeastLength, 
	requiredCheck,
	isPhoneNumber,
	isYear
} from './../helpers';

export const inputHasChanged = (actionType : String, validationRules : [String], value , confirmValue = null) => {
	const returnInputState = (dispatch, value, valid, validLabel) => {
		dispatch({ 
			type 		: actionType,
			payload 	: {
				value,
				valid,
				validLabel,
			}
		});	
	}

	return (dispatch) => {
		if (validationRules !== undefined || validationRules !== null) {
			if (validationRules.length > 0) {
				let valid = true;
				let validLabel = '';
				for (const rule of validationRules) {
					//Leave if we have found an invalid rule
					if (!valid){ break; }

					//Check Rule
					switch (rule) {
					case 'required':
						if (!requiredCheck(value)){
							valid = false;
							validLabel = "Required";
						}
						break;
					case 'email':
						if (!isEmail(value)){
							valid = false;
							validLabel = "Invalid Email Format";
						}
						break;
					case 'password':
						if (!isAtLeastLength(value, 6)){
							valid = false;
							validLabel = "At Least 6 Characters";
						}
						break;
					case 'phone':
						if (!isPhoneNumber(value)){
							valid = false;
							validLabel = "Invalid Phone Number";
						}
						break;
					case 'year':
						if (!isYear(value)){
							valid = false;
							validLabel = "Invalid Year";
						}
						break;
					case 'confirm':
						if (value !== confirmValue){
							valid = false;
							validLabel = "Doesn't Match";
						}
						break;
					default:
						console.log("VALIDATION RULE WITHOUT HANDLER", rule)
					}
				}
				returnInputState(dispatch, value, valid, validLabel);
			}else{ returnInputState(dispatch, value, true, ''); }
		}else{ returnInputState(dispatch, value, true, ''); }
	};
};

