function validateNewsletterValues() {
	const name = document.getElementById("friend-name").value
	const email = document.getElementById("friend-email").value
	const nameValid = validateName(name)
	const emailValid = validateEmail(email)
	if(!nameValid) {
		alert("Este nome não é válido!")
	} else if(!emailValid) {
		alert("Este e-mail não é válido!")
	} else {
		alert("Seu amigo foi cadastrado!")
	}
}

// A person's name don't have a valid format,
// hence it will be considered valid if anything is typed.
function validateName(name) {
	return name.length > 0
}

// E-mail validation using a regular expression it's very commom
// Reference: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
	const format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return format.test(String(email).toLowerCase())
}
