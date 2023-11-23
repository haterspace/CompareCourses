import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import type { CourseType } from '../../../types/courseType';
import { useAppDispatch } from '../../../redux/hooks';
import { submitCourseComplaintThunk } from '../../../redux/slices/coursecomplaint/courseComplaintThunks';
import { closeCourseComplaintModal } from '../../../redux/slices/modals/ModalSlice';

type ComplaintFormProps = {
  courseId: Number;
};
export default function ComplaintForm({ courseId }: ComplaintFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    body: '',
    courseId: courseId,
  });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const dispatch = useAppDispatch();

  return (
    <div>
      <DialogTitle>Жалоба</DialogTitle>
      <DialogContent>
        <DialogContentText>Опишите, пожалуйста, подробно суть претензии</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Суть претензии"
          type="text"
          fullWidth
          variant="standard"
          name="body"
          value={formData.body}
          onChange={changeHandler}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeCourseComplaintModal())}>Отменить</Button>
        <Button
          onClick={() => {
            dispatch(submitCourseComplaintThunk(formData));
            dispatch(closeCourseComplaintModal());
          }}
        >
          Отправить
        </Button>
      </DialogActions>
    </div>
  );
}
