import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from 'react-redux';

const Selection = ({handleChangeCategory,cat}) => {
    const {jobType}=useSelector(state=>state.loadjobType)
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select"
        value={cat}
        onChange={handleChangeCategory}
        >
          <MenuItem value="">All</MenuItem>
          {
            jobType?.map((jobType)=>(
                <MenuItem key={jobType?._id} value={jobType?._id}>{jobType?.jobTypeName}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selection;
