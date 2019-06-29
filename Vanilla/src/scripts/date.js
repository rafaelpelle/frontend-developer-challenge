// Will get the 'date' span element and set its value to the current year
setCurrentYear()

function setCurrentYear() {
	const currentYear = new Date().getFullYear()
	document.getElementById("date").innerHTML = currentYear
}
