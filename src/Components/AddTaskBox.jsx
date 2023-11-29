import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
const AddTaskBox = ({t, taskTime}) => {
  const ariaLabel = { "aria-label": "description" };
  const [taskName , setTaskName] = useState('');

  const taskNameSet = (e)  => {
    (setTaskName(e.target.value))
    e.preventDefault()
    console.log(taskName)
  }
  return (
    <div className=" text-gray-900 mt-2">
      <Box component="form"sx={{"& > :not(style)": { m: 1 },} }noValidate autoComplete="off">
        <Input placeholder="Enter The Task" inputProps={ariaLabel} id="inputBox" onChange={(e) => taskNameSet(e)}/>
      </Box>

    </div>
  );
};

export default AddTaskBox;
