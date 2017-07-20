import React from 'react';
import { func, string} from 'prop-types';

const SendMessageDisplay = ({ onInputChange, inputValue, onButtonClick }) => (
  <div>
    <input type="text" onChange={onInputChange} value={inputValue} />
    <button onClick={onButtonClick}>Send</button>
  </div>
);

SendMessageDisplay.propTypes = {
  onInputChange: func.isRequired,
  inputValue: string.isRequired,
  onButtonClick: func.isRequired,
};

export default SendMessageDisplay;
