import { useState } from "react"

const TodoForm = ({ onAgregarNote }) => {

  const [textNote, setTextNote] = useState("");

  // Este pedazo lo impementé yo
  const [warningText, setWarningText] = useState("");

  function handleWarning () {
    if (textNote === "") {
      setWarningText("La tarea no puede estár vacía");
      console.log("La tarea no puede estár vacía");
    } else {
      setWarningText("Tarea agregada correctamente");
      console.log("Tarea agregada correctamente");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newNote = {
      note: textNote,
      completed: false
    }

    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newNote)
    })
    .then(response => response.json())
    .then(data => {
      onAgregarNote(data)
      setTextNote("")
      setWarningText(warningText)
    })
  }

//  const handleChange = (e) => {
//    setTextNote(e.target.value)
//  }

  return (
    <div>
      <h2>Todo Form</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          id="nota" 
          name="nota" 
          value={textNote}
          onChange={() => setTextNote(event.target.value)}
          />
        <p>{warningText}</p>
        <button type="submit" onClick={handleWarning}>Enviar la nota</button>
      </form>
    </div>
  )
}

export default TodoForm