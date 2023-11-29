import React from 'react'
import { useState } from 'react';
import Task from './Task';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme } from '@mui/material';
import AddTaskBox from './AddTaskBox';




const TaskBox = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false)
    const [taskList , setTaskList] = useState({'Task1': 'task1 Time','task2' : 'task2 Time','task3' : 'task3 Time','task4' : 'task4 Time','task5' : 'task5 Time',})
    const theme = createTheme({
      palette:{
        primary:{
          main: '#295c7e',
          light : '#12486B',
          dark: '#152d3d'
        }
      }

    })

    const currentDate = new Date().toJSON().slice(0,10);
    const handleAddTask = () => {
     setIsComponentVisible(true)
    }
    const deleteTask = (taskName) => {
      const updatedTaskList = {... taskList};
      delete updatedTaskList[taskName]
      setTaskList(updatedTaskList)
    }
  return (
    
    <div>
      <div className=' bg-white flex rounded-xl flex-col p-7 -mt-56'>
        <div className='mb-5'>
            <div className='flex justify-between'>
            <h2 className='text-gray-700 text-2xl font-bold mt-3 mr-5'>{currentDate}</h2>
            <Fab   theme={theme} color='primary' aria-label="add" onClick={handleAddTask}>
              <AddIcon />
            </Fab>
            </div>
           <p className=' text-[#12486B] font-medium'>{Object.keys(taskList).length} tasks</p>
           {isComponentVisible && <AddTaskBox/>}
        </div>
        {Object.keys(taskList).length === 0 ? (
          <p className=' text-gray-700 text-center text-lg'>Haven't Added Any Tasks</p>
        ) : (
          Object.entries(taskList).map(([taskName, taskTime]) => (
            <Task key={taskName} taskName={taskName} taskTime={taskTime} doneTask={deleteTask} />
          ))
        )}
        
        
    </div>
    </div>
  ) 
}

export default TaskBox