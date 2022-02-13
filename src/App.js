import './App.css';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus, faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'

library.add(faMinus, faPlus, faAnglesDown, faAnglesUp)

function App() {
  const [input, setInput] = useState("")
  const [options, setOptions] = useState(["Watch Movie"])
  const [chosenOption, setChosenOption] = useState("")
  const [showDelete, setShowDelete] = useState(false)

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

  function deleteOption(index) {
    setOptions(state => state.filter((option, i) => i !== index))
  }

  function deleteAllOptions() {
    setOptions([])
  }

  function chooseOption() {
    if (options.length === 0) {
      setChosenOption("Please add at least one option.")
    } else {
      setChosenOption(options[Math.floor(Math.random() * options.length)])
    }
  }

  function toggleDelete() {
    setShowDelete(state => !state)
  }

  return (
    <div className="app cols">
      <div className="col left">
        <header>
          <h1>Indecisive App</h1>
          Put your choices in the hands of a computer.
        </header>
        <div className="choose-section">
          <button className="choose-button" onClick={chooseOption}>What should I do?</button>
          <div className="choose-result">{chosenOption}</div>
        </div>
        <button className="toggle-button" onClick={toggleDelete}>
          <FontAwesomeIcon icon={`fa-solid fa-angles-${showDelete ? "up" : "down"}`} />
        </button>
        {showDelete &&
        <div className="delete-section">
          <button className="delete-button" onClick={deleteAllOptions}>Remove All Options</button>
        </div>}
      </div>
      <div className="col">
        <form onSubmit={addOption} className="row">
          <input className="item" type="text" value={input} onChange={updateInput} placeholder="New option" />
          <button className="right-button" type="submit">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </button>
        </form>
        {options.map((option, index) => <div key={index} className="row">
          <div className="item">{option}</div>
          <button className="right-button" onClick={() => deleteOption(index)}>
            <FontAwesomeIcon icon="fa-solid fa-minus" />
          </button>
        </div>)}
      </div>
    </div>
  );
}

export default App;
