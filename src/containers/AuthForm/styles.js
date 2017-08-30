import { colors } from './../../config/styles';

export default {
	container : {
		position 		: 'relative',
	    width 			: '90%',
	    maxWidth 		: '600px',
	    margin 			: '60px auto',
	    padding 		: '30px',
	    border 			: '1px solid #e5e5e5',
	    borderRadius 	: '10px',
	    textAlign		: 'center',
	},
	buttons : {
		position		: 'relative',
		display			: 'inline-block',
		padding			: '5px 20px',
		backgroundColor	: 'white',
		color 			: '#1573AB',
		border			: '1px solid #1573AB',
		transition		: 'color 0.2s ease-in, background-color 0.2 ease-in',
		cursor			: 'pointer',

		':hover' : {
			color : 'white',
			backgroundColor : '#1573AB'
		}
	},
	activeFormButton : {
		color : 'white',
		backgroundColor : '#1573AB'
	}
}