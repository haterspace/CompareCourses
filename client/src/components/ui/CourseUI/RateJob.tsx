import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Dialog, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addJobGradesThunk } from '../../../redux/slices/grades/gradesThunks';
import { GradesJobFormType } from '../../../types/gradesType';
import { closeRateJobModal } from '../../../redux/slices/modals/ModalSlice';

function RateJob() {
  const [grades, setGrades] = useState({
    support: 0,
    actualInfo: 0,
    portfolio: 0,
    salaryAverage: 0,
  });

  const handleRatingChange = (criterion: string, value: number) => {
    setGrades({ ...grades, [criterion]: value });
  };
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const courseId = useAppSelector((store) => store.modal.isOpenForRateJob);
  const dispatch = useAppDispatch();
  const submitGrades = (formData: GradesJobFormType) => {
    if (courseId) {
      void dispatch(addJobGradesThunk({ id: courseId, formData: formData }));
    }
  };

  return (
    <div>
      <Dialog open={true} fullWidth maxWidth="md" style={{ borderRadius: '10px' }}>
        <DialogTitle style={{ marginBottom: '25px', textDecoration: 'underline' }}>
          Оценка курса
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: '16px' }}>
            Оцените курс по следующим критериям:
          </DialogContentText>
          <div style={{ marginBottom: '16px' }}>
            <label>Качество помощи в поиске работы</label>
            <Select
              style={{ marginLeft: '20px', borderRadius: '10px', height: '30px' }}
              value={grades.support}
              onChange={(e) => handleRatingChange('support', +e.target.value)}
            >
              {array.map((el) => (
                <MenuItem key={`1${el}`} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label>Насколько была актуальна информация с курса?</label>
            <Select
              style={{ marginLeft: '20px', borderRadius: '10px', height: '30px' }}
              value={grades.actualInfo}
              onChange={(e) => handleRatingChange('actualInfo', +e.target.value)}
            >
              {array.map((el) => (
                <MenuItem key={`2${el}`} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label>Качество портфолио, с которым вы вышли после прохождения курса</label>
            <Select
              style={{ marginLeft: '20px', borderRadius: '10px', height: '30px' }}
              value={grades.portfolio}
              onChange={(e) => handleRatingChange('portfolio', +e.target.value)}
            >
              {array.map((el) => (
                <MenuItem key={`3${el}`} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <label>
              Ваша зарплата после прохождения курса (если вы начали работать по профессии)
            </label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              InputProps={{
                style: {
                  borderRadius: '10px',
                  width: '100px',
                  marginLeft: '20px',
                },
              }}
              value={grades.salaryAverage}
              onChange={(e) => handleRatingChange('salaryAverage', +e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(closeRateJobModal())} color="primary">
            Отмена
          </Button>
          <Button
            onClick={() => {
              submitGrades(grades);
              dispatch(closeRateJobModal());
            }}
            color="primary"
          >
            Оценить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RateJob;
