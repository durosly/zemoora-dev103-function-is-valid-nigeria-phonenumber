function isValidPhonenumber(phonenumber) {
	let phoneLength = 0;
	let phoneCopy = phonenumber;
	// get length of phonenumber
	while (phoneCopy > 0) {
		phoneCopy = Math.trunc(phoneCopy / 10);
		phoneLength++;
	}

	if (phoneLength !== 10 && phoneLength !== 13) {
		return false;
	}

	if (phoneLength === 13) {
		// get first 3 digits of phonenumber

		let firstThreeDigits = extractDigits(phonenumber, phoneLength, 1, 3);
		let nextTwoDigits = extractDigits(phonenumber, phoneLength, 4, 5);

		if (firstThreeDigits !== 234) {
			return false;
		}

		// check if first three digits are preceeded by 70, 80, 81, 90, 91
		const response = checkifProviderExist(nextTwoDigits);
		return response;
	} else if (phoneLength === 10) {
		// get first 2 digits of phonenumber
		let firstTwoDigits = extractDigits(phonenumber, phoneLength, 1, 2);

		// check if first three digits are preceeded by 70, 80, 81, 90, 91
		const response = checkifProviderExist(firstTwoDigits);

		return response;
	}

	return true;
} // function ends

function checkifProviderExist(num) {
	if (num !== 70 && num !== 80 && num !== 81 && num !== 90 && num !== 91) {
		return false;
	}

	return true;
}

function extractDigits(phone, length, start, end) {
	let digits = 0;
	let pow = 0;

	while (phone > 0) {
		let digit = phone % 10;
		phone = Math.trunc(phone / 10);

		if (length >= start && length <= end) {
			digits = Math.pow(10, pow) * digit + digits;
			pow++;
		}

		length--;
	}

	return digits;
}
