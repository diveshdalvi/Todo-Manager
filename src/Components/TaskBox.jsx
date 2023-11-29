import React from 'react'
import { useState } from 'react';
import { IoAddCircleSharp } from "react-icons/io5";
import Task from './Task';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme } from '@mui/material';
import TaksInputBox from './TaksInputBox';


let TaskList ={
  'Task1': 'task1 Time',
  'task2' : 'task2 Time',
  'task3' : 'task3 Time',
  'task4' : 'task4 Time',
  'task5' : 'task5 Time',
}

const TaskBox = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false)
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
    const deletTask = () => {
     
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
           <p className=' text-[#12486B] font-medium'>4 tasks</p>
           {isComponentVisible && <TaksInputBox/>}
        </div>
        {Object.values(TaskList).map((task , taskTime) => (
        <Task taskName={task} taskTime={taskTime}/>
      ))}
        
    </div>
    </div>
  ) 
}

export default TaskBox