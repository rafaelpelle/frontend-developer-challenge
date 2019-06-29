import * as React from 'react'
import { useInput, useEmailInput } from '../../hooks/useInput'
import { validName, validEmail } from '../../utils/validators'

require('./newsletter.css')

const Newsletter: React.FC<Props> = (props) => {
	const useName = useInput('')
	const useEmail = useEmailInput('')

	function validateNewsletterValues() {
		if (!validName(useName.value)) {
			alert('Este nome não é válido!')
		} else if (!validEmail(useEmail.value)) {
			alert('Este e-mail não é válido!')
		} else {
			alert('Seu amigo foi cadastrado!')
		}
	}

	return (
		<section className='newsletter-container'>
			<p className='newsletter-header big'>Compartilhe a novidade</p>
			<p className='newsletter-header small'>
				Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
			</p>
			<form>
				<article className='input-container'>
					<article className='input-item'>
						<p className='input-label'>Nome do seu amigo:</p>
						<input name='name' { ...useName } />
					</article>
					<article className='input-item'>
						<p className='input-label'>E-mail:</p>
						<input name='email' { ...useEmail } />
					</article>
				</article>
			</form>
			<button className='primary-button' onClick={ validateNewsletterValues }>
				Enviar agora
			</button>
		</section>
	)
}

export default Newsletter
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
