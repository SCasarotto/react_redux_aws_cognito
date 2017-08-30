import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class RTForm extends Component {

	render() {
		const {
			styleOverloads,
			children
		} = this.props;

		return (
			<form 
				style={{
					...styles.form,
					...styleOverloads,
				}}
			>
				{children}
			</form>
		);
	}
}

RTForm.propTypes = {
	styleOverloads	: PropTypes.object,
}

RTForm.defaultProps = {};

export default RTForm;