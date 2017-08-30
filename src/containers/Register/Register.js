import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { 
    inputHasChanged,
    registerUser 
} from './../../actions'; 
import { AuthKeys } from './../../actions/types';

import RTForm from './../../component/Form/RTForm';
import RTRow from './../../component/Form/RTRow';
import RTLabel from './../../component/Form/RTLabel';
import RTInput from './../../component/Form/RTInput';
import RTButton from './../../component/Form/RTButton';

//import styles from './styles';

class Register extends Component {

     constructor(props) {
        super(props);

        this.handleEmailChange      = this.handleEmailChange.bind(this);
        this.handlePasswordChange   = this.handlePasswordChange.bind(this);
        this.handleRegisterSubmit   = this.handleRegisterSubmit.bind(this);
    }

   handleEmailChange(event) {
        const value = event.target.value;

        this.props.inputHasChanged(
            AuthKeys.REGISTER_EMAIL_CHANGED, 
            ['required', 'email'], 
            value
        );
    }
    handlePasswordChange(event) { 
        const value = event.target.value;

        this.props.inputHasChanged(
            AuthKeys.REGISTER_PASSWORD_CHANGED, 
            ['required', 'password'], 
            value
        ); 
    }

    handleRegisterSubmit(){
        const { registerEmailData, registerPasswordData, registerUser } = this.props;

        const email     = registerEmailData.value;
        const password  = registerPasswordData.value;
        registerUser({email, password});
    }
    render(){
       const {        
            registerEmailData,
            registerPasswordData
        } = this.props;

        return (
            <RTForm>
                <h1>Register</h1>
                <RTRow>
                    <RTLabel labelText="Email Address" /> 
                    <RTInput 
                        type='email'
                        value={registerEmailData.value}
                        onChange={this.handleEmailChange}
                     />
                </RTRow>
                <RTRow>
                    <RTLabel labelText="Password" /> 
                    <RTInput 
                        type='password'
                        value={registerPasswordData.value}
                        onChange={this.handlePasswordChange}
                   />
                </RTRow>
                <RTButton onClick={this.handleRegisterSubmit}>Submit</RTButton>
            </RTForm>
        )
    }
}

Register.propTypes = {};

Register.defaultProps = {};

const mapStateToProps = (state) => {
    const {
        registerEmailData,
        registerPasswordData
    } = state.Auth;

    return {
        registerEmailData,
        registerPasswordData
    };
}

export default connect(mapStateToProps, {
    inputHasChanged,
    registerUser,  
})(Register);