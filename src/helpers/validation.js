//String Validation Functions
//
// - Mostly used for input validation
//
export const isEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

export const isAtLeastLength = (text, number) => {
	return text.length >= number ;
};

export const requiredCheck = (text) => {
	if (text === undefined || text === null || text === ''){ return false }
	return true;
};

export const isPhoneNumber = (phonenumber) => {
	let newNumber = phonenumber;
	newNumber = newNumber.replace(/\D/g,'');
	if (newNumber.length < 10 || newNumber.length > 11){
		return false;
	}
	if (newNumber.length === 11){
		if (newNumber.charAt(0) !== "1"){
			return false;
		}
	}

	return true;
}

export const isYear = (year) => {
	return String(year).length === 4;
}