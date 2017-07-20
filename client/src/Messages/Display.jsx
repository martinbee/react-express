import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

const MessagesDisplay = ({ messages }) => {
  if (! messages || !messages.length) return (
    <div className="blank-state">No Messages Found.</div>
  );

  const renderMessages = () => messages.map(({ id, content, author }) => (
    <li key={id} className="message">
      <span className="author">{author}:</span> {content}
    </li>
  ));

  return <ul className="messages-container">{renderMessages()}</ul>;
}

MessagesDisplay.propTypes = {
  messages: arrayOf(
    shape({
      id: string.isRequired,
      content: string.isRequired,
      author: string.isRequired,
    }),
  ),
};

export default MessagesDisplay;
