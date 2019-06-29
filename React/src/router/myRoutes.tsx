import * as React from 'react'
import { Redirect, Route } from 'react-router'
import LandingPage from '../pages/landingPage/landingPage'


const MyRoutes: React.FC<Props> = (props) => {
	return (
		<div style={ divStyle }>
			<Route
				exact={ true }
				path='/'
				render={ () =>
					<LandingPage />
				}
			/>
		</div>
	)
}
export default MyRoutes

/////////////////////////////////////////////////////////////////
//////////////////////////// STYLES /////////////////////////////
/////////////////////////////////////////////////////////////////
const divStyle = { }
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
