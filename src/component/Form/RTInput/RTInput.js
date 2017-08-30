import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

//
// TODO: Setup Specific Styles For Different Types
//

class RTInput extends Component {

	determineBaseStyling(type){
		switch (type){
			default:
				return styles.input
		}
	}

	render() {
		const {
			styleOverloads,
			type,
			value,
			onChange,
			secondaryProps,
		} = this.props;

		return (
			<input 
				type={type}
				value={value}
				onChange={onChange}
				style={{
					...this.determineBaseStyling(type),
					...styleOverloads,
				}}
				{...secondaryProps}
			/>
		);
	}
}

RTInput.propTypes = {
	styleOverloads	: PropTypes.object,
	type 			: PropTypes.string.isRequired,
	value 			: PropTypes.oneOfType([
	  PropTypes.string,
	  PropTypes.number,
	  PropTypes.bool,
	]).isRequired,
	onChange 		: PropTypes.func.isRequired,
}

RTInput.defaultProps = {
	type 	: 'text'
};

export default RTInput;