import { colors } from './../../../config/styles';

export default {
	button:{
		position		: 'relative',
		width			: '100%',
		display			: 'inline-block',
		padding			: '5px 20px',
		backgroundColor	: 'white',
		color 			: '#1573AB',
		border			: '1px solid #1573AB',
		transition		: 'color 0.2s ease-in, background-color 0.2 ease-in',
		cursor			: 'pointer',

		':hover' : {
			color : colors.white,
			backgroundColor : '#1573AB'
		}
	}
}