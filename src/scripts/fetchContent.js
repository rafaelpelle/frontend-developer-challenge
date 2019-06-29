fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		for(product of data.products) {
			appendProductCard(product)
		}
	})
	.catch((error) => {
		console.log(error)
	})
