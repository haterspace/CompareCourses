import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

type FilterPropsType = {
  choiseHandler: (event: React.ChangeEvent<{ value: string }>) => void;
  selected: string;
};

export default function FilterComponentHomePage({
  choiseHandler,
  selected,
}: FilterPropsType): JSX.Element {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '90%' }}>
      <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="Type"
        onChange={choiseHandler}
        value={selected}
        defaultValue="all"
      >
        <MenuItem value="all">Все</MenuItem>
        <MenuItem value={1}>Проффесиональные курсы</MenuItem>
        <MenuItem value={2}>Hard-skills</MenuItem>
        <MenuItem value={3}>Soft-skills</MenuItem>
      </Select>
    </FormControl>
  );
}
