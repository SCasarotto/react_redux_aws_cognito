import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class RTLabel extends Component {
	render() {
		const {
			labelText,
			styleOverloads
		} = this.props;

		return (
			<label 
				style={{
					...styles.label,
					...styleOverloads,
				}}
			>
				{labelText}
			</label>
		);
	}
}

RTLabel.propTypes = {
	labelText 		: PropTypes.string,
	styleOverloads	: PropTypes.object,
}

RTLabel.defaultProps = {};

export default RTLabel;