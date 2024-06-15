// TaskList.js
import React, { useState } from 'react';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTask, setEditedTask] = useState('');

  const handleEdit = (index, task) => {
    setEditIndex(index);
    setEditedTask(task);
  };

  const handleUpdate = (index) => {
    updateTask(index, editedTask);
    setEditIndex(-1);
    setEditedTask('');
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <button onClick={() => handleUpdate(index)}>Save</button>
            </>
          ) : (
            <>
              {task}
              <button onClick={() => handleEdit(index, task)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
