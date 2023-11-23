import React, { useEffect } from 'react';
import ComplaintCourseList from '../ui/complaintUi/ComplaintCourseList';
import { getAdminCourseComplaintsThunk } from '../../redux/slices/admin/AdminThunks';
import { useAppDispatch } from '../../redux/hooks';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ComplaintCommentList from '../ui/complaintUi/ComplaintCommentList';

export default function AdminPage(): JSX.Element {
  const [type, setType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <div style={{ marginBottom: '500px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Что хотим модерировать?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Что хотим модерировать"
          onChange={handleChange}
        >
          <MenuItem value={'Курсы'}>Курсы</MenuItem>
          <MenuItem value={'Комментарии'}>Комментарии</MenuItem>
        </Select>
      </FormControl>
      {type === 'Курсы' && <ComplaintCourseList />}
      {type === 'Комментарии' && <ComplaintCommentList />}
    </div>
  );
}
