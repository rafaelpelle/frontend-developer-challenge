import * as React from 'react'
require('./appHeader.css')

const AppHeader: React.FC<Props> = (props) => (
	<header className='app-header'>
		<p className='medium-header'>uma seleção de produtos</p>
		<p className='large-header'>especial para você</p>
		<p className='small-header'>
			Todos os produtos desta lista foram selecionados a partir da sua navegação.
			Aproveite!
		</p>
		<nav className='button-grid'>
			<button>Conheça a Linx</button>
			<button>Ajude o algorítmo</button>
			<button>Seus produtos</button>
			<button>Compartilhe</button>
		</nav>
	</header>
)

export default AppHeader
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
