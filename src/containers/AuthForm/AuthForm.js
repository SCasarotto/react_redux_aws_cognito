import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Radium from 'radium'

import { connect } from 'react-redux';
import { } from './../../actions';

import SignIn from './../SignIn';
import Register from './../Register';
import ForgotPassword from './../ForgotPassword';
import VerifyAccount from './../VerifyAccount';


import styles from './styles';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = { activeForm : 'SignIn' };
    }

    renderActiveForm(activeForm){
		const { from } = this.props.location.state || { from: { pathname: '/' } };
    	switch (activeForm){
    		case 'SignIn': 
    			return <SignIn redirect={from} styleOverloads={styles.forms} />
    		case 'Register':
    			return <Register styleOverloads={styles.forms} />
            case 'Verify':
                return <VerifyAccount styleOverloads={styles.forms} />
    		default:
    			return <SignIn redirect={from} styleOverloads={styles.forms} />
    	}
    }

    render(){
    	const { activeForm } = this.state;
        return (
			<div style={styles.container}>
				<div>
					<button 
                        type='button'
                        key='signInKey' 
                        style={[
                            styles.buttons, 
                            this.state.activeForm === 'SignIn' && styles.activeFormButton
                        ]} 
                        onClick={() => {this.setState({ activeForm: 'SignIn' })}}
                    >
                        Sign In
                    </button>
					<button 
                        type='button'
                        key='registerKey' 
                        style={[
                            styles.buttons, 
                            this.state.activeForm === 'Register' && styles.activeFormButton
                        ]}                        
                        onClick={() => {this.setState({ activeForm: 'Register' })}}
                    >
                        Register
                    </button>
                    <button 
                        type='button'
                        key='verifyKey' 
                        style={[
                            styles.buttons, 
                            this.state.activeForm === 'Verify' && styles.activeFormButton
                        ]}                        
                        onClick={() => {this.setState({ activeForm: 'Verify' })}}
                    >
                        Verify Account
                    </button>
				</div>
				<div>
					{ this.renderActiveForm(activeForm) }
				</div>
			</div>
        )
    }
}

AuthForm.propTypes = {};

AuthForm.defaultProps = {};

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps, { })(Radium(AuthForm));