import React, { Component } from 'react';
import InputField from "./InputField";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import SocialMediaButton from "./SocialMediaButton";
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'

class RegisterForm extends Component {
    render() {
        return (
            <div className="LoginForm">
                <h2>Register</h2>
                <InputField label="Email" type="email"/>
                <InputField label="Password" type="password"/>
                <InputField label="Password confirmation" type="password"/>
                <ButtonGroup>
                    <Button title="Register"/>
                </ButtonGroup>
                <p>Or use social media:</p>
                <ButtonGroup>
                    <SocialMediaButton image={facebook}/>
                    <SocialMediaButton image={twitter}/>
                </ButtonGroup>
            </div>
        );
    }
}

export default RegisterForm;