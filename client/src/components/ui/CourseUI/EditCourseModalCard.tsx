/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { CourseFormType } from '../../../types/courseType';
import { editCourseThunk } from '../../../redux/slices/course/courseThunk';
import { closeEditCourseModal } from '../../../redux/slices/modals/ModalSlice';

export default function EditCourseModalCard({ course, setOpen }): JSX.Element {
  const dispatch = useAppDispatch();
  // const courseOpen = useAppSelector((store) => store.modal.isOpenForEditCourseModal);

  const [editInput, setEditInput] = useState<CourseFormType>({
    category: '',
    name: `${course?.name}`,
    desc: `${course?.desc}`,
    url: `${course?.url}`,
    categoryId: course?.categoryId,
    format: `${course?.format}`,
    price: course?.price,
    duration: course?.duration,
  });
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editHandler = async (): Promise<void> => {
    // if (courseOpen !== null) {
    void dispatch(editCourseThunk({ formData: editInput, id: course.id }));
    // }
    dispatch(closeEditCourseModal());
  };
  console.log(course, 'aaaaaa');

  return (
    <>
      <DialogTitle>Измените данные о курсе </DialogTitle>
      <DialogContent>
        <TextField
          placeholder="Name"
          name="name"
          value={editInput.name}
          onChange={changeHandler}
          fullWidth
          margin="normal"
          defaultValue={course?.name}
        />
        <TextField
          placeholder="Description"
          name="desc"
          value={editInput.desc}
          onChange={changeHandler}
          fullWidth
          // margin='dense'
          style={{ margin: '0 0 2% 0' }}
          defaultValue={course?.desc}
        />
        <FormControl fullWidth style={{ margin: '0 0 2% 0' }}>
          <InputLabel>Категория курса</InputLabel>
          <Select
            name="categoryId"
            value={editInput.categoryId}
            defaultValue={course?.categoryId}
            onChange={changeHandler}
          >
            <MenuItem value="1">Проффесиональные курсы</MenuItem>
            <MenuItem value="2">soft-skills</MenuItem>
            <MenuItem value="3">hard-skills</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Формат курса</InputLabel>
          <Select
            name="format"
            value={editInput.format}
            onChange={changeHandler}
            defaultValue={course?.format}
          >
            <MenuItem value="Онлайн">Онлайн</MenuItem>
            <MenuItem value="Оффлайн">Оффлайн</MenuItem>
          </Select>
        </FormControl>
        <TextField
          placeholder="Duration"
          name="duration"
          value={editInput.duration}
          onChange={changeHandler}
          fullWidth
          margin="normal"
        />
        <TextField
          placeholder="Price"
          name="price"
          value={editInput.price}
          onChange={changeHandler}
          fullWidth
          margin="normal"
        />
        <Button
          onClick={() => {
            editHandler();
            setOpen(false);
          }}
        >
          Сохранить изменения
        </Button>
        <Button onClick={() => setOpen(false)}>Отменить</Button>
      </DialogContent>
    </>
  );
}
