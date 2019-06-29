let nextPage = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
fetchProductPage(nextPage)


function fetchProductPage(endpoint) {
	fetch(endpoint)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			nextPage = data.nextPage
			for(product of data.products) {
				appendProductCard(product)
			}
		})
		.catch((error) => {
			console.log(error)
		})
}
