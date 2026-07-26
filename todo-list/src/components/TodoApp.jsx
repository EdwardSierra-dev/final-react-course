import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

function TodoApp () {
// (props)
// { notas } ... tener en cuenta que no se pueden rendirizar objetos pero si las propiedades.

  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/notes");
        if (!response.ok) {
          throw new Error (`Error http: ${response.status}`);
        }
        const data = await response.json();
        setNotas(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, [])

  const addNota = (nuevaNota) => {
    setNotas([...notas, nuevaNota]);
  }

  return (
    <>
      <h2 style={{
        color: "red"
        }}>App de notas bro
      </h2>
      <TodoForm onAgregarNote={addNota}/>
      <ul>
        {notas.map((nota) => (
          <li key={nota.id}>{nota.note} {nota.completed ? "✅":"❌"}</li>
        ))}
      </ul>
    </>
  )
}

export default TodoApp