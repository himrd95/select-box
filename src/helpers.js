function validateEmail(email) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.match(mailformat)) {
		return true;
	} else {
		alert('You have entered an invalid email address!');
		return false;
	}
}

export default validateEmail;
