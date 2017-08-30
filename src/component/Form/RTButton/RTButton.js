import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium'

import styles from './styles';

class RTButton extends Component {

	render() {
		const {
			styleOverloads,
			onClick,
			children
		} = this.props;

		return (
			<button 
				type="button"
				onClick={onClick}
				style={{
					...styles.button,
					...styleOverloads,
				}}
			>
				{children}
			</button>
		);
	}
}

RTButton.propTypes = {
	styleOverloads	: PropTypes.object,
	onClick 		: PropTypes.func.isRequired,
}

RTButton.defaultProps = {};

export default Radium(RTButton);