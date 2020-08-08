const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};

const addOption = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderTemplate();
};

const selectOption = () => {
  const index = Math.floor(Math.random() * app.options.length);
  const option = app.options[index];
  alert(option);
};

const removeAll = () => {
  app.options = [];
  renderTemplate();
};

const appRoute = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <div>
        <button disabled={!app.options.length} onClick={selectOption}>
          What should I do?
        </button>
        <button onClick={removeAll}>Remove All</button>
      </div>
      <ol>
        {app.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
      <form onSubmit={addOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoute);
};

renderTemplate();
