import React, { useState } from 'react';
import './App.css';

// eslint-disable-next-line
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return;
    }

    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={newTask} onChange={handleNewTask} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim().length === 0) {
      return;
    }

    const newTask = {
      id: Math.random().toString(),
      text: inputValue.trim(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  };

  const handleCompleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter todo"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTask}>Add ToDo</button>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? 'green' : 'black',
                }}
                onClick={() => handleCompleteTask(task.id)}
              >
                {task.text}
              </span>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              {!task.completed && (
                <button onClick={() => handleCompleteTask(task.id)}>Completed</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
