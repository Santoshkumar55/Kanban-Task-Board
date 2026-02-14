import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [done, setDone] = useState([]);

  // Add new task
  function addTask() {
    if (input === "") return;
    setTodo([...todo, input]);
    setInput("");
  }

  // Delete task
  function deleteTask(list, setList, index) {
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  }

  // Move task
  function moveTask(fromList, setFrom, toList, setTo, index) {
    const task = fromList[index];
    const updatedFrom = fromList.filter((item, i) => i !== index);
    setFrom(updatedFrom);
    setTo([...toList, task]);
  }

  return (
    <div className="container">
      <h1>Kanban Task Board</h1>

      <div className="add-section">
        <input
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="board">

        {/* TO DO */}
        <div className="column">
          <h2>To Do</h2>
          {todo.map((item, index) => (
            <div className="card" key={index}>
              <p>{item}</p>
              <button
                onClick={() =>
                  moveTask(todo, setTodo, progress, setProgress, index)
                }
              >
                Move
              </button>
              <button
                className="delete"
                onClick={() => deleteTask(todo, setTodo, index)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        {/* IN PROGRESS */}
        <div className="column">
          <h2>In Progress</h2>
          {progress.map((item, index) => (
            <div className="card" key={index}>
              <p>{item}</p>
              <button
                onClick={() =>
                  moveTask(progress, setProgress, done, setDone, index)
                }
              >
                Move
              </button>
              <button
                className="delete"
                onClick={() => deleteTask(progress, setProgress, index)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        {/* DONE */}
        <div className="column">
          <h2>Done</h2>
          {done.map((item, index) => (
            <div className="card" key={index}>
              <p>{item}</p>
              <button
                className="delete"
                onClick={() => deleteTask(done, setDone, index)}
              >
                X
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
