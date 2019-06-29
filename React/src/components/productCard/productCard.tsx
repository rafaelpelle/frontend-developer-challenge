import * as React from 'react'
import { ProductInterface } from '../../utils/interfaces'
import { handleMoneyFormat } from '../../utils/stringParser'

require('./productCard.css')

const ProductCard: React.FC<Props> = (props) => {
	const { product } = props

	return (
		<article className='product'>
			<img className='product-img' src={ 'http:' + product.image } />
			<p className='product-name'>
				{ product.name }
			</p>
			<p className='product-description'>
				{ product.description }
			</p>
			<p className='product-oldPrice'>
				{ `De: ${handleMoneyFormat(product.oldPrice, 'BRL')}` }
			</p>
			<p className='product-price'>
				{ `Por: ${handleMoneyFormat(product.price, 'BRL')}` }
			</p>
			<p className='product-installments'>
				{ `ou ${product.installments.count}x de ${handleMoneyFormat(product.installments.value, 'BRL')}` }
			</p>
			<button className='primary-button product-button'>Comprar</button>
		</article>
	)
}

export default ProductCard
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	product: ProductInterface
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
