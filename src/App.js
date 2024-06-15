// App.js
import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const updateTask = (index, newTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Itinerary Planner</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
