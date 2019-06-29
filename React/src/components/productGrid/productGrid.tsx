import * as React from 'react'
import ProductCard from '../productCard/productCard'
import { ProductInterface } from '../../utils/interfaces'

require('./productGrid.css')

const ProductGrid: React.FC<Props> = (props) => {
	const [nextPage, setNextPage] = React.useState('frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
	const [products, setProducts] = React.useState([])

	React.useEffect(() => {
		fetchProductPage()
	}, [])

	function fetchProductPage() {
		fetch('https://' + nextPage)
			.then(handleError)
			.then(handleSuccess)
			.catch(error => {
				alert('Houve um problema:\n' + error)
			})
	}

	function handleError(response: any) {
		if (!response.ok) {
			throw Error(response.statusText)
		}
		return response.json()
	}

	function handleSuccess(data: DataInterface) {
		const currentProducts = products
		currentProducts.push(...data.products)
		setProducts(currentProducts)
		setNextPage(data.nextPage)
	}

	return (
		<section className='products-container'>
			<p className='products-header'>
				Sua seleção especial
			</p>
			<section className='products-grid' id='products-grid'>
				{ products.map((product: ProductInterface, index: number) => {
					return <ProductCard product={ product } key={ index }/>
				}) }
			</section>
			<button className='primary-button' onClick={ fetchProductPage }>
				Ainda mais produtos aqui!
			</button>
		</section>
	)
}

export default ProductGrid
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface DataInterface {
	products: ProductInterface[]
	nextPage: string,
}

interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
