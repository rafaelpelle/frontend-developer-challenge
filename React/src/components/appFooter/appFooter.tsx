import * as React from 'react'
require('./appFooter.css')

const AppFooter: React.FC<Props> = (props) => {
	function getCurrentYear() {
		return new Date().getFullYear()
	}

	return (
		<footer className='app-footer'>
			<p>
				Testando suas habilidades em HTML, CSS e JS.<br />
				Linx Impulse<br />
				{ getCurrentYear() }
			</p>
		</footer>
	)
}

export default AppFooter

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
