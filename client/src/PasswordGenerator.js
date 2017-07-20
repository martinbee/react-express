import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
const socket = io();

class App extends Component {
  state = { passwords: [] }

  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    fetch('/api/passwords')
      .then(res => res.json())
      .then((passwords) => {
        this.setState({ passwords });
        socket.emit('passwords', { passwords });
      });
  }

  renderPasswordsArray() {
    return this.state.passwords.map((password, index) => (
      <li key={index}>
        {password}
      </li>
    ));
  }

  renderPasswords() {
    if (this.state.passwords.length) {
      return (
        <div>
          <h1>5 Passwords.</h1>
          <ul className="passwords">
            {this.renderPasswordsArray()}
          </ul>
          <button
            className="more"
            onClick={this.getPasswords}>
            Get More
          </button>
        </div>
      );
    }

    return (
      <div>
        <h1>No passwords :(</h1>
        <button
          className="more"
          onClick={this.getPasswords}>
          Try Again?
        </button>
      </div>
    );
  }

  render() {
    return <div className="App">{this.renderPasswords()}</div>;
  }
}

export default App;
