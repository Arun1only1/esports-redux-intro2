import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const LiveDisplay = () => {
  const values = useSelector((state) => state.user);
  return (
    <div>
      <Typography variant="h4">value is:{values.randomText}</Typography>
    </div>
  );
};

export default LiveDisplay;
