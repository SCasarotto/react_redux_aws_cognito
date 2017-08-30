import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { signOutUser } from './../../actions';

import { connect } from 'react-redux';

//import styles from './styles';

class Dashboard extends Component {
   render(){
        return (
			<div>
				<h1>Dashboard</h1>
                <p>This is a protected page. You should only see this if you have signed in.</p>
                <button onClick={this.props.signOutUser}>Sign Out</button>
			</div>
        )
    }
}

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps, { signOutUser })(Dashboard);