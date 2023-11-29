import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
const TaksInputBox = () => {
  const ariaLabel = { "aria-label": "description" };
  return (
    <div className=" text-gray-900 mt-2">
      <Box component="form"sx={{"& > :not(style)": { m: 1 },} }noValidate autoComplete="off">
        <Input placeholder="Enter The Task" inputProps={ariaLabel} />
      </Box>
    </div>
  );
};

export default TaksInputBox;
