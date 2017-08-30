import React from 'react'
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

/**
 * Component that protects route from unauthorized users.
 * @type {Object}
 */
const PrivateRoute = (props) => {
    const { component: Component, signedIn, ...rest } = props;
    return(
        <Route {...rest} render={props => (
            signedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/signIn',
                    state: { from: props.location }
                }}/>
            )
        )}/>
    )
}

PrivateRoute.propTypes = {};

PrivateRoute.defaultProps = {};

const mapStateToProps = (state) => {
	const { signedIn } = state.Auth
	return { signedIn }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));