import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addOtherGradesThunk } from '../../../redux/slices/grades/gradesThunks';
import { GradesOtherFormType } from '../../../types/gradesType';
import { closeRateOtherModal } from '../../../redux/slices/modals/ModalSlice';

function RateOtherCourses() {
  const [grades, setGrades] = useState({
    practicalTasks: 0,
    realLifeApplication: 0,
    instructors: 0,
  });

  const handleRatingChange = (criterion: string, value: number) => {
    setGrades({ ...grades, [criterion]: value });
  };
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const dispatch = useAppDispatch();
  const courseId = useAppSelector((store) => store.modal.isOpenForOtherJob);
  const submitGrades = (formData: GradesOtherFormType) => {
    if (courseId) {
      void dispatch(addOtherGradesThunk({ id: courseId, formData: formData }));
    }
  };
  return (
    <div>
      <DialogTitle>Оценка курса</DialogTitle>
      <DialogContent>
        <DialogContentText>Оцените курс по следующим критериям:</DialogContentText>
        <div>
          <label>Качество подачи информации</label>
          <Select
            style={{ marginLeft: '20px', borderRadius: '10px', height: '30px' }}
            value={grades.instructors}
            onChange={(e) => handleRatingChange('instructors', +e.target.value)}
          >
            {array.map((el) => (
              <MenuItem key={`1${el}`} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <label>Смогли ли вы применить информацию из курса в жизни?</label>
          <Select
            style={{ marginLeft: '20px', borderRadius: '10px', height: '30px' }}
            value={grades.realLifeApplication}
            onChange={(e) => handleRatingChange('realLifeApplication', +e.target.value)}
          >
            {array.map((el) => (
              <MenuItem key={`2${el}`} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <label>Оцените качество практических заданий</label>
          <Select
            style={{ marginLeft: '20px', borderRadius: '10px', height: '30px' }}
            value={grades.practicalTasks}
            onChange={(e) => handleRatingChange('practicalTasks', +e.target.value)}
          >
            {array.map((el) => (
              <MenuItem key={`3${el}`} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeRateOtherModal())} color="primary">
          Отмена
        </Button>
        <Button
          onClick={() => {
            submitGrades(grades);
            dispatch(closeRateOtherModal());
          }}
          color="primary"
        >
          Оценить
        </Button>
      </DialogActions>
    </div>
  );
}

export default RateOtherCourses;
