import React, { useState } from 'react';
import './Todo.css'; 

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');


  // Add task function    "onclick"
  const addTask = () => {
    if (newTask !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Add task function    "onKeyPress" -> "Enter"
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  // shows task function completed or pending on UI
  const toggleCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete task function 
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  // it's function that show 3 different tasks "All tasks" , "Pending Tasks", "Completed Tasks"
  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Pending') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });


  const totalTasks = tasks.length;    // this is for showing number of total tasks 
  const completedTasks = tasks.filter(task => task.completed).length;  // this is for showing number of complete tasks

  return (
    <div className="app">
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a new task" className="task-input" />
      <button onClick={addTask} className="add-task-button">Add Task</button>
      <div className="task-counter">
        <span>Total Tasks: {totalTasks}</span>
        <span> | Completed Tasks: {completedTasks}</span>
      </div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </div>
      <div className="task-list">
        {filteredTasks.map((task, index) => (
          <div key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(index)}
            />
            {task.text}
            <button onClick={() => deleteTask(index)} className="delete-task-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
