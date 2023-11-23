import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type FilterComponentProps = {
  handleChange: (event: SelectChangeEvent) => void;
  selectedCategory: string;
};
function FilterComponent({ handleChange, selectedCategory }: FilterComponentProps) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={selectedCategory}
        onChange={handleChange}
        label="Type"
        defaultValue="job"
      >
        <MenuItem value="job">Проффесиональные курсы</MenuItem>
        <MenuItem value="other">Остальные</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterComponent;
