import React, { Component } from 'react';
import InputField from './components/InputField';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import RoomCard from './components/room/RoomCard'
import RoomsTable from "./components/room/RoomsTable";
class App extends Component {
  render() {
      const rooms = [
          {
              level: 0,
              players: [1,2,3],
              capacity: 8,
              createdAt: new Date().toISOString()
          },
          {
              level: 3,
              players: [1,2,3, 5,6],
              capacity: 12,
              createdAt: new Date().toDateString()
          },
          {
              level: 3,
              players: [1,2,3, 5,6],
              capacity: 12,
              createdAt: new Date().toDateString()
          },
          {
              level: 3,
              players: [1,2,3, 5,6],
              capacity: 12,
              createdAt: new Date().toDateString()
          },
          {
              level: 3,
              players: [1,2,3, 5,6],
              capacity: 12,
              createdAt: new Date().toDateString()
          },
          {
              level: 3,
              players: [1,2,3, 5,6],
              capacity: 12,
              createdAt: new Date().toDateString()
          },
          {
              level: 3,
              players: [1,2,3, 5,6],
              capacity: 12,
              createdAt: new Date().toDateString()
          },
          {
              level: 3,
              players: [1,2,3, 5,6],
              capacity: 12,
              createdAt: new Date().toDateString()
          },
          {
              level: 3,
              players: [1,2,3, 5,6],
              capacity: 12,
              createdAt: new Date().toDateString()
          },
          {
              level: 2,
              players: [1],
              capacity: 9,
              createdAt: new Date().toDateString()
          }
      ];
    return (
      <div className="App">
          <h1>GUNPLAY</h1>
          <RegisterForm/>
      </div>
    );
  }
}

export default App;
