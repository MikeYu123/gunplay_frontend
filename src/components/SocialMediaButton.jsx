import React, { Component } from 'react';

class SocialMediaButton extends Component {
    render() {
        return (
            <div className="SocialMediaButton">
                <img src={this.props.image}/>
            </div>
        );
    }
}

export default SocialMediaButton;