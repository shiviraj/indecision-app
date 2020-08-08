'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var addOption = function addOption(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderTemplate();
};

var selectOption = function selectOption() {
  var index = Math.floor(Math.random() * app.options.length);
  var option = app.options[index];
  alert(option);
};

var removeAll = function removeAll() {
  app.options = [];
  renderTemplate();
};

var appRoute = document.getElementById('app');

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { disabled: !app.options.length, onClick: selectOption },
        'What should I do?'
      ),
      React.createElement(
        'button',
        { onClick: removeAll },
        'Remove All'
      )
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option, index) {
        return React.createElement(
          'li',
          { key: index },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: addOption },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoute);
};

renderTemplate();
