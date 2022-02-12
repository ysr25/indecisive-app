import './App.css';
import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")
  const [options, setOptions] = useState(["Watch Movie"])
  const [chosenOption, setChosenOption] = useState("")

  function updateInput(event) {
    setInput(event.target.value)
  }

  function addOption(event) {
    event.preventDefault()
    const trimmed = input.trim()
    if (trimmed !== "") {
      setOptions(state => ([...state, trimmed]))
      setInput("")
    }
  }

  function removeOption(index) {
    setOptions(state => state.filter((option, i) => i !== index))
  }

  function removeAllOptions() {
    setOptions([])
  }

  function chooseOption() {
    setChosenOption(options[Math.floor(Math.random() * options.length)])
  }

  return (
    <div className="App">
      <header>
        <h1>Indecisive App</h1>
        <h2>Put your choices in the hands of a computer.</h2>
      </header>
      <div>
        <button onClick={chooseOption}>What should I do?</button>
        <div>{chosenOption}</div>
      </div>
      <div>
        <form onSubmit={addOption}>
          <input type="text" value={input} onChange={updateInput}/>
          <input type="submit" value="Add Option"/>
        </form>
        <button onClick={removeAllOptions}>Remove All</button>
      </div>
      <div>
        {options.map((option, index) => <div key={index}>
          {option}
          <button onClick={() => removeOption(index)}>Remove Option</button>
        </div>)}
      </div>
    </div>
  );
}

export default App;
