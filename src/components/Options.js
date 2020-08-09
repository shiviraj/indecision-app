import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleRemoveAll}>Remove All</button>
    {props.options.map((option, index) => (
      <Option
        key={index}
        optionText={option}
        handleRemoveOption={props.handleRemoveOption}
      />
    ))}
  </div>
);

export default Options;
