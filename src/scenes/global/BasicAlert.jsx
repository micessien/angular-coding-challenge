import React from "react";
// MUI Stuff
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const BasicAlert = ({ type, message }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert severity={type}>{message}</Alert>
    </Stack>
  );
};

export default BasicAlert;
