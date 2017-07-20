import React, { Component } from 'react';
import io from 'socket.io-client';

import Display from './Display';

const socket = io();

export default class Messages extends Component {
  state = { messages: [] };

  componentDidMount() {
    this.subscribeToMessages();
  }

  subscribeToMessages() {
    socket.on(
      'message',
      message => this.setState({ messages: this.state.messages.concat(message) }),
    );
  }

  render() {
    return <Display messages={this.state.messages} />;
  }
}
