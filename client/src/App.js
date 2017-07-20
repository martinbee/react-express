import React, { Component } from 'react';
import './App.css';

import Messages from './Messages';
import SendMessage from './SendMessage';

export default class App extends Component {
  state = { author: '', showChat: false };

  setAuthor = evt => this.setState({ author: evt.target.value });

  handleSubmit = () => {
    if (this.state.author) this.setState({ showChat: true });
  };

  render() {
    const { showChat, author } = this.state;

    if (showChat) return (
      <div className="App">
        <h1>Chat Room</h1>
        <SendMessage author={author} />
        <Messages />
      </div>
    );

    return (
      <div className="App">
        <p>Please enter your name:</p>
        <input id="name" type="text" value={author} onChange={this.setAuthor} />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}
