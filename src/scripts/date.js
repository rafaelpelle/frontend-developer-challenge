setCurrentYear()

function setCurrentYear() {
	const currentYear = new Date().getFullYear()
	document.getElementById("date").innerHTML = currentYear
}
