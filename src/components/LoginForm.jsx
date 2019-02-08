import React, { Component } from 'react';
import InputField from "./InputField";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import SocialMediaButton from "./SocialMediaButton";
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'

class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm">
                <h2>To proceed, login</h2>
                <InputField label="Email" type="email"/>
                <InputField label="Password" type="password"/>
                <ButtonGroup>
                    <Button title="Login"/>
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

export default LoginForm;