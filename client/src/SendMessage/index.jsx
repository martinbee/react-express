import React, { Component } from 'react';
import { string } from 'prop-types';
import io from 'socket.io-client';

import Display from './Display';

const socket = io();

const generateId = () => {
  let id = '';

  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random()*10);
    id += randomNumber;
  }

  return id;
}

export default class SendMessage extends Component {
  static propTypes = {
    author: string.isRequired,
  };

  state = { messageContent: '' };

  editMessageContent = evt => this.setState({ messageContent: evt.target.value });

  sendMessage = () => {
    const { messageContent } = this.state;

    if (messageContent) {
      const message = {
        id: generateId(),
        content: messageContent,
        author: this.props.author,
      }

      socket.emit('message', message);
      this.setState({ messageContent: '' });
    }
  };

  render() {
    return (
      <Display
        onInputChange={this.editMessageContent}
        inputValue={this.state.messageContent}
        onButtonClick={this.sendMessage}
      />
    );
  }
}
