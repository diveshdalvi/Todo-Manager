import React from 'react'
import { useState } from 'react';
import { IoAddCircleSharp } from "react-icons/io5";
import Task from './Task';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme } from '@mui/material';


const TaskBox = () => {
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
  return (
    
    <div>
      <div className=' bg-white flex rounded-xl flex-col p-7 -mt-56'>
        <div className='mb-5'>
            <div className='flex justify-between'>
            <h2 className='text-gray-700 text-2xl font-bold mt-3 mr-5'>{currentDate}</h2>
            <Fab   theme={theme} color='primary' aria-label="add">
              <AddIcon />
            </Fab>
            </div>
           <p className=' text-[#12486B] font-medium'>4 tasks</p>
        </div>
        
        <Task/>
    </div>
    </div>
  )
}

export default TaskBox