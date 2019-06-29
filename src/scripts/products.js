// interface ProductInterface {
// 	id: number
// 	name: string
// 	image: string
// 	oldPrice: number
// 	price: number
// 	description: string
// 	installments: {
// 		count: number
// 		value: number
// 	}
// }

function appendProductCard(product) {
	const imgSrc = "http://" + product.image.slice(-product.image.length+2)
	const image = document.createElement("img")
	image.className = "product-img"
	image.src = imgSrc

	const name = document.createElement("p")
	name.className = "product-name"
	name.innerHTML = product.name

	const description = document.createElement("p")
	description.className = "product-description"
	description.innerHTML = product.description

	const oldPrice = document.createElement("p")
	oldPrice.className = "product-oldPrice"
	oldPrice.innerHTML = `De: ${handleMoneyFormat(product.oldPrice, "BRL")}`

	const price = document.createElement("p")
	price.className = "product-price"
	price.innerHTML = `Por: ${handleMoneyFormat(product.price, "BRL")}`

	const installments = document.createElement("p")
	installments.className = "product-installments"
	installments.innerHTML = `ou ${product.installments.count}x de ${handleMoneyFormat(product.installments.value, "BRL")}`

	const button = document.createElement("button")
	button.className = "primary-button product-button"
	button.innerHTML = "Comprar"

	const productCard = document.createElement("article")
	productCard.className = "product"
	productCard.append(image)
	productCard.append(name)
	productCard.append(description)
	productCard.append(oldPrice)
	productCard.append(price)
	productCard.append(installments)
	productCard.append(button)

	const grid = document.getElementById("products-grid")
	grid.append(productCard)
}
