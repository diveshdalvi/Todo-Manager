import React from 'react'
import { useState } from 'react';
import { IoAddCircleSharp } from "react-icons/io5";
import Task from './Task';


const TaskBox = () => {
    const currentDate = new Date().toJSON().slice(0,10);
  return (
    
    <div>
      <div className=' bg-white flex rounded-xl flex-col p-7'>
        <div className='mb-5'>
            <div className='flex justify-between'>
            <h2 className='text-gray-700 text-2xl font-bold mt-3 mr-5'>{currentDate}</h2>

            <IoAddCircleSharp  style={{ color: "#12486B" }} size={'4rem'}className=' cursor-pointer tap-transparent'/>
            </div>
           <p className=' text-[#12486B] font-medium'>4 tasks</p>
        </div>
        
        <Task/>
    </div>
    </div>
  )
}

export default TaskBox