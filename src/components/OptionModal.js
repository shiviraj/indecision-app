import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="SelectedOptions"
    onRequestClose={props.handleClearSelectedOption}
  >
    <h3>selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
