fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data.products)
		console.log(data.nextPage)
	})
	.catch((error) => {
		console.log(error)
	})
