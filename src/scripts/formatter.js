function handleMoneyFormat(value, currency) {
	if (value === undefined || value === null) {
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
