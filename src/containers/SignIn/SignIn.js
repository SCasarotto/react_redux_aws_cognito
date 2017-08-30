import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    inputHasChanged,
    signInUser,   
} from './../../actions';
import { AuthKeys } from './../../actions/types';

import RTForm from './../../component/Form/RTForm';
import RTRow from './../../component/Form/RTRow';
import RTLabel from './../../component/Form/RTLabel';
import RTInput from './../../component/Form/RTInput';
import RTButton from './../../component/Form/RTButton';

//import styles from './styles';

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.handleEmailChange      = this.handleEmailChange.bind(this);
        this.handlePasswordChange   = this.handlePasswordChange.bind(this);
        this.handleSignInSubmit     = this.handleSignInSubmit.bind(this);
    }

    handleEmailChange(event) {
        const value = event.target.value;

        this.props.inputHasChanged(
            AuthKeys.SIGN_IN_EMAIL_CHANGED, 
            ['required', 'email'], 
            value
        );
    }
    handlePasswordChange(event) { 
        const value = event.target.value;

        this.props.inputHasChanged(
            AuthKeys.SIGN_IN_PASSWORD_CHANGED, 
            ['required', 'password'], 
            value
        ); 
    }
    handleSignInSubmit(){
        const { signInEmailData, signInPasswordData, signInUser, redirect } = this.props;

        const email     = signInEmailData.value;
        const password  = signInPasswordData.value;
        signInUser({email, password, redirect});
    }

    render(){
        const {
            signInEmailData,
            signInPasswordData
        } = this.props;

        return (
            <RTForm>
                <h1>Sign In</h1>
                <RTRow>
                    <RTLabel labelText="Email Address" /> 
                    <RTInput 
                        type='email'
                        value={signInEmailData.value}
                        onChange={this.handleEmailChange}
                    />
                </RTRow>
                <RTRow>
                    <RTLabel labelText="Password" /> 
                    <RTInput 
                        type='password'
                        value={signInPasswordData.value}
                        onChange={this.handlePasswordChange}
                    />
                </RTRow>
                <RTButton onClick={this.handleSignInSubmit}>Submit</RTButton>
            </RTForm>
        )
    }
}

SignIn.propTypes = {};

SignIn.defaultProps = {};

const mapStateToProps = (state) => {
    const {
        signInEmailData,
        signInPasswordData
    } = state.Auth;

    return {
        signInEmailData,
        signInPasswordData
    };
}
export default connect(mapStateToProps, {
    inputHasChanged,
    signInUser,   
})(SignIn);
