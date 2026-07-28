import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

function TodoApp () {
// (props)
// { notas } ... tener en cuenta que no se pueden rendirizar objetos pero si las propiedades.

  const [notas, setNotas] = useState([]);

// Ests parte la implementé yo
  const deleteNota = async (id) => {
    await fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });

    setNotas((prev) => prev.filter((nota) => nota.id !== id));
  }

  const completarTarea = async (id, completed) => {
    await fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });

    setNotas((prev) =>
      prev.map((nota) =>
        nota.id === id ? { ...nota, completed: !completed } : nota
      )
    );
  };

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
          <li key={nota.id}>{nota.note} {nota.completed ? "✅":"❌"}
            <button onClick={() => completarTarea(nota.id, nota.completed)}>{nota.completed ? "Desmarcar" : "Completar tarea"}</button>
            <button 
              className="button-delete-note"
              onClick={() => deleteNota(nota.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoApp