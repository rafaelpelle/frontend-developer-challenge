// Will receive a the money value and money currency,
// then build a string using the brazilian standard format.
//
// The function was copied from my other project.
// This project only uses the 'BRL' currency.
function handleMoneyFormat(value, currency) {
	if (!value) {
		value = 0
	}
	const formattedValue = Number(value).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
	switch (currency) {
		case 'USD':
			return 'US$ ' + formattedValue
		case 'EUR':
			return formattedValue + ' €'
		default:
			return 'R$ ' + formattedValue
	}
}
