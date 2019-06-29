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

function validateName(name) {
	return name.length > 0
}

function validateEmail(email) {
	const format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return format.test(String(email).toLowerCase())
}
