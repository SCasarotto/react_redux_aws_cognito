import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { 
    inputHasChanged,
    verifyUser 
} from './../../actions'; 
import { AuthKeys } from './../../actions/types';

import RTForm from './../../component/Form/RTForm';
import RTRow from './../../component/Form/RTRow';
import RTLabel from './../../component/Form/RTLabel';
import RTInput from './../../component/Form/RTInput';
import RTButton from './../../component/Form/RTButton';

//import styles from './styles';

class VerifyAccount extends Component {

     constructor(props) {
        super(props);

        this.handleEmailChange      = this.handleEmailChange.bind(this);
        this.handleCodeChange       = this.handleCodeChange.bind(this);
        this.handleVerifySubmit     = this.handleVerifySubmit.bind(this);
    }

   handleEmailChange(event) {
        const value = event.target.value;

        this.props.inputHasChanged(
            AuthKeys.VERIFY_EMAIL_CHANGED, 
            ['required', 'email'], 
            value
        );
    }
    handleCodeChange(event) { 
        const value = event.target.value;

        this.props.inputHasChanged(
            AuthKeys.VERIFY_CODE_CHANGED, 
            ['required'], 
            value
        ); 
    }

    handleVerifySubmit(){
        const { verifyEmailData, verifyCodeData, verifyUser } = this.props;

        const email     = verifyEmailData.value;
        const code      = verifyCodeData.value;
        verifyUser({email, code});
    }
    render(){
       const {        
            verifyEmailData,
            verifyCodeData
        } = this.props;

        return (
            <RTForm>
                <h1>Verify Account</h1>
                <RTRow>
                    <RTLabel labelText="Email Address" /> 
                    <RTInput 
                        type='email'
                        value={verifyEmailData.value}
                        onChange={this.handleEmailChange}
                     />
                </RTRow>
                <RTRow>
                    <RTLabel labelText="Verification Code" /> 
                    <RTInput 
                        type='text'
                        value={verifyCodeData.value}
                        onChange={this.handleCodeChange}
                   />
                </RTRow>
                <RTButton onClick={this.handleVerifySubmit}>Submit</RTButton>
            </RTForm>
        )
    }
}

VerifyAccount.propTypes = {};

VerifyAccount.defaultProps = {};

const mapStateToProps = (state) => {
    const {
        verifyEmailData,
        verifyCodeData
    } = state.Auth;

    return {
        verifyEmailData,
        verifyCodeData
    };
}

export default connect(mapStateToProps, {
    inputHasChanged,
    verifyUser,  
})(VerifyAccount);