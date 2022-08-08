import { Box, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import { useState } from "react";
import PosterDisplay from "../components/PosterDisplay";

const TitlesPage = ({ type }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  return (
    <>
      <Box sx={{ p: 2 }}>
      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={title}
            onChange={handleChange}
            label="Title"
          />
        </FormControl>
      </Box>
      <PosterDisplay type={type} name={title}/>
    </>
  );
};

export default TitlesPage;
