import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class RTRow extends Component {
	
	renderSizeStyling(size){
		switch (size){
			case 'full':
				return { width: '100%' }
			case 'half':
				return { width: '50%' }
			case 'third':
				return { width: '33.33%' }
			case 'forth':
				return { width: '25%' }
			default:
				return { width: '100%' }
		}
	}

	renderPositionStyling(size, last){
		if (size === 'full'){
			return {};
		}

		if (last){ 
			return { paddingLeft: '10px' }; 
		}
		
		return { paddingRight: '10px' };
	}

	render() {
		const {
			size,
			last,
			styleOverloads,
			children
		} = this.props;

		return (
			<div 
				className="form-row" 
				style={{
					...styles.container, 
					...this.renderSizeStyling(size), 
					...this.renderPositionStyling(size, last),
					...styleOverloads
				}}
			>
				{children}
			</div>
		);
	}
}

RTRow.propTypes = {
	size 			: PropTypes.string,
	last 			: PropTypes.bool,
	styleOverloads	: PropTypes.object,
	children		: PropTypes.node,
}

RTRow.defaultProps = {
	size 	: 'full',
	last 	: false,
};

export default RTRow;