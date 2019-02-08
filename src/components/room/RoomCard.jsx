import React, { Component } from 'react';
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
class RoomCard extends Component {
    render() {
        return (
            <div className="RoomCard">
                <h3>Level: {this.props.level}</h3>
                <article>Players: {this.props.players.length}</article>
                <ButtonGroup>
                    <Button title="Join"/>
                </ButtonGroup>
            </div>
        );
    }
}

export default RoomCard;