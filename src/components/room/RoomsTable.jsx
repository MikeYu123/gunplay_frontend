import React, { Component } from 'react';
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
class RoomsTable extends Component {
    renderRow(row) {
        return (
            <tr>
                <td>{row.level}</td>
                <td>{row.players.length}/{row.capacity}</td>
                <td>{row.createdAt}</td>
            </tr>
        )

    }

    render() {
        const rows = this.props.rooms.map(row => this.renderRow(row));
        return (
            <div className="RoomsTable">
                <table>
                <thead>
                <tr>
                    <th>Level</th>
                    <th>Players</th>
                    <th>Created At</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
                </table>
            </div>
        );
    }
}

export default RoomsTable;