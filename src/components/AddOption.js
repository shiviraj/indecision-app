import React from 'react';

class AddOption extends React.Component {
  state = { error: undefined };

  handleSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.addNewOption(option);

    this.setState(() => ({ error }));

    if (!error) e.target.elements.option.value = '';
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <input type="submit" value="Add Option" />
        </form>
      </div>
    );
  }
}

export default AddOption;
