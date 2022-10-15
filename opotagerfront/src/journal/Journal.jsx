import { Box } from "@mui/material";
import React from "react";
import JournalElement from "./JournalElement";

const Journal = () => {
  return (
    <Box    
      display="flex" 
      padding="10px"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >{[1,2,3,4,5,6,7].map((item)=>(<JournalElement key={item} />) )}
      <JournalElement />
    </Box>
  );
};

export default Journal;
