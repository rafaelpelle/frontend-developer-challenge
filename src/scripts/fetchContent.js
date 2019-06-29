let nextPage = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
fetchProductPage(nextPage)

// Will use 'fetch' to GET the API data (a list of products and the nextPage url)
function fetchProductPage(endpoint) {
	fetch(endpoint)
		.then(handleErrors)
		.then(appendProductPage)
		.catch(error => {
			alert("Houve um problema:\n" + error)
		})
}

// Will call the appendProductCard() function, to every product in the list;
// Also will update the nextPage global variable.
function appendProductPage(data) {
	nextPage = data.nextPage
	for(product of data.products) {
		appendProductCard(product)
	}
}

// Basic error handling
function handleErrors(response) {
	// Either will throw an exception with the statusText
	if (!response.ok) {
		throw Error(response.statusText);
	}
	// Or will return the endpoint data.
	return response.json();
}
