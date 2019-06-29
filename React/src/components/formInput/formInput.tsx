import * as React from 'react'


const FormInput: React.FC<Props> = (props) => {
	const {
		name,
		value,
		placeholder,
		label,
		error,
		style,
		type,
		maxLength,
		autoFocus,
		disabled,
		fullWidth,
		onChange,
		onClick,
		onKeyUp,
		onBlur,
	} = props
	return (
		<input
			name={ name }
			value={ value }
			placeholder={ placeholder }
			autoFocus={ autoFocus }
			disabled={ disabled }
			style={ style }
			type={ type }
			maxLength={ maxLength }
			onChange={ onChange }
			onClick={ onClick }
			onKeyUp={ onKeyUp }
			onBlur={ onBlur }
		/>
	)
}
export default FormInput

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	name?: string
	rawValue?: string
	value?: string
	placeholder?: string
	label?: string
	error?: string,
	type?: string,
	style?: any,
	maxLength?: number
	autoFocus?: boolean
	disabled?: boolean
	fullWidth?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
	onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
