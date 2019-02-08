import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className="Button">
                {this.props.title}
            </div>
                );
        }
}

export default Button;