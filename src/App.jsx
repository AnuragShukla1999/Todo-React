import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setEditIndex(null);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const saveEditedTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = editedTask;
    setTasks(newTasks);
    setEditIndex(null);
  };

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className="container  border border-blue-900 rounded-lg w-96 flex flex-col items-center min-h-[400px] bg-blue-200">
        <h1 className="text-3xl font-bold m-4 mt-3 mb-3">ToDo App</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border rounded px-2 py-1 mr-5"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>
        <ul className='mb-5 mt-5'>
          {tasks.map((task, index) => (
            <li key={index} className="mb-3">
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    className="border rounded px-2 py-1 mr-2"
                  />
                  <button
                    onClick={() => saveEditedTask(index)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <div className='flex items-center justify-center'>
                  <div className='mr-3 w-44 ml-2 font-bold'>
                  {task}
                  </div>
                  <div>
                    <button
                      onClick={() => editTask(index)}
                      className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeTask(index)}
                      className="bg-red-500 text-white px-2 py-1 ml-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
