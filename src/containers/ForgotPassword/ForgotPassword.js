import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import RTForm from './../../component/Form/RTForm';
import RTRow from './../../component/Form/RTRow';
import RTLabel from './../../component/Form/RTLabel';
import RTInput from './../../component/Form/RTInput';
import RTButton from './../../component/Form/RTButton';

//import styles from './styles';

class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = { email : '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const email = event.target.value;
        this.setState({ email });
    }
    handleSubmit() {
        const { email } = this.state;
        alert(`Test Submit.${"\n\n"}Values:${"\n"}email: ${email}`);
    }
    render(){
        const { email } = this.state;

        return (
            <RTForm>
                <h1>Forgot Password</h1>
                <RTRow>
                    <RTLabel labelText="Email Address" /> 
                    <RTInput 
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                    />
                </RTRow>
                <RTButton 
                    onClick={this.handleSubmit}
                >
                    Submit
                </RTButton>
            
            </RTForm>
        )
    }
}

ForgotPassword.propTypes = {};

ForgotPassword.defaultProps = {};

export default ForgotPassword;