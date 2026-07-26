import { useState } from "react"

const TodoForm = ({ onAgregarNote }) => {

  const [textNote, setTextNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()

    if (textNote === "") {
      console.log("No se puede agregar notas vacias!")
      return 
    }

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
        <button type="submit">Enviar la nota</button>
      </form>
    </div>
  )
}

export default TodoForm