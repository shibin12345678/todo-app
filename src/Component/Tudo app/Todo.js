import React, { useState } from 'react';
import './Tudo.css';
import AddTask from '../AddTask';
import ListTask from './ListTask';

const Todo = () => {
  const [tasks, setTasks] = useState([ ]);

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };
  const removeTask=(index)=>{
    const newTask=[...tasks];
    newTask.splice(index,1);
    setTasks(newTask)
  }

  return (
    <>
      <div className='Todo-container'>
        <div className='header'>Todo App</div>
        <div className='add-task'>
          <AddTask addTask={addTask} />
        </div>
        <div className='task'>
          {tasks.map((task,index) => (
            <ListTask task={task} key={task.title}removeTask={removeTask} 
            index={index} Key={index}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
