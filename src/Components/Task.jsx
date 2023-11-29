import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { createTheme } from '@mui/material';

const Task = ({taskName , taskTime ,doneTask}) => {
  const theme = createTheme({
    palette:{
      primary:{
        main: '#DB0000',
        light: '#DB0000',
        dark : '#DB0000'
      }
    }

  })
  const deleteTask = (taskName) => {
    doneTask(taskName)
  }
  const time = new Date();
  const [isChecked , setIsChecked] = useState(false);
  const handleCheckBox = (e) => {
    setIsChecked(e.target.checked);
  }
  const currentTime =time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return (
    <div className='text-gray-700 flex justify-between mt-2' key={taskName}>
      <Checkbox checked={isChecked} onChange={handleCheckBox}/>
        <h2 className={isChecked?' mt-2 text-gray-400 font-semibold text-lg line-through':' mt-2 text-gray-600 font-semibold text-lg underline'}>{taskName}</h2>
        <p className={isChecked?' text-gray-400 mt-2.5 line-through mx-3':' text-gray-400 mt-2.5  mx-3'}>{taskTime}</p>
        {isChecked?<IconButton  color ='primary' theme={theme}  onClick={() => (deleteTask(taskName))}>
          <DeleteIcon />
        </IconButton>:<IconButton aria-label="delete" disabled color="primary" >
        <DeleteIcon />
      </IconButton>}
    </div>
  )
}

export default Task