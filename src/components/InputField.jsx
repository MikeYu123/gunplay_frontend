import React, { Component } from 'react';

class InputField extends Component {
    render() {
        return (
            <div className="InputField">
                <label>{this.props.label}</label>
                <input type={this.props.type} placeholder={this.props.placeholder}/>
            </div>
                );
        }
}

export default InputField;