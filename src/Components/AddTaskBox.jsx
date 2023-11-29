import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
const AddTaskBox = ({taskAdd , Task}) => {
  const ariaLabel = { "aria-label": "description" };
  const [task, setTask] = useState({
    name : "",
    time : '',
  },);

  const handleChange = (e) => {
    const time = new Date();
    const currentTime =time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    setTask(prevState => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
    setTask((prevState) => ({
      ...prevState,
      time: currentTime,
    }));
  }
  const closeAddBox = () => {
    taskAdd(false)
  }
  const handleSubmit = (e) => {
    closeAddBox()
    Task(task)
    e.preventDefault();
  }
  return (
    <div className=" text-gray-900 mt-2">
      <Box component="form"sx={{"& > :not(style)": { m: 1 },} } noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Input placeholder="Enter The Task" inputProps={ariaLabel} id="inputBox"  value={task.name} onChange={handleChange} name="name"/>
      </Box>

    </div>
  );
};

export default AddTaskBox;
