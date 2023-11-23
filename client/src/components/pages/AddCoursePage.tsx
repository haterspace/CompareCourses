import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addCourseThunk } from '../../redux/slices/course/courseThunk';
import { CourseFormType } from '../../types/courseType';
import { useNavigate } from 'react-router-dom';

function AddCoursePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [courseData, setCourseData] = useState<CourseFormType>({
    name: '',
    desc: '',
    url: '',
    categoryId: '',
    format: '',
    duration: 0,
    price: 0,
    givesDiplom: false,
  });

  const handleChange = (e): void => {
    const { name, value, type, checked } = e.target;
    setCourseData({
      ...courseData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // const description = e.currentTarget.description as HTMLInputElement;
    // const fileInput = e.currentTarget.file as HTMLInputElement;
    // console.log(e.currentTarget.file.files);

    // if (!fileInput.files[0]) return;
    const formData = new FormData();
    formData.append('file', e.currentTarget.file.files[0]);
    formData.append('name', courseData.name);
    formData.append('desc', courseData.desc);
    formData.append('url', courseData.url);
    formData.append('price', courseData.price);

    formData.append('categoryId', courseData.categoryId);
    formData.append('format', courseData.format);
    formData.append('duration', courseData.duration);
    formData.append('givesDiplom', courseData.givesDiplom);

    // console.log(formData)
    // const formData = Object.fromEntries(new FormData(e.currentTarget));
    // console.log(formData);
    // e.currentTarget.reset();
    // apiService.post('/', formData).then(console.log).catch(console.log);
    // dispatch(changeUserPicThunk(formData));

    dispatch(addCourseThunk(formData));
    navigate('/');
  };

  return (
    <>
      <Typography variant="h2" gutterBottom>
        заполните информацию о курсе
      </Typography>
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        {/* (Grid>TextField)*4 */}
        <TextField
          label="Название курса"
          name="name"
          value={courseData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Описание курса"
          name="desc"
          value={courseData.desc}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
        style={{marginTop: '10px'}}
        />
        <TextField
          label="Ссылка на сайт курса"
          name="url"
          value={courseData.url}
          onChange={handleChange}
          fullWidth
          style={{marginTop: '10px'}}
        />
        <FormControl fullWidth style={{marginTop: '10px'}}>
          <InputLabel>Категория курса</InputLabel>
          <Select name="categoryId" value={courseData.categoryId} onChange={handleChange}>
            <MenuItem value="1">Проффесиональные курсы</MenuItem>
            <MenuItem value="2">soft-skills</MenuItem>
            <MenuItem value="3">hard-skills</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{marginTop: '10px'}}>
          <InputLabel>Формат курса</InputLabel>
          <Select name="format" value={courseData.format} onChange={handleChange}>
            <MenuItem value="1">Онлайн</MenuItem>
            <MenuItem value="2">Оффлайн</MenuItem>
          </Select>
        </FormControl>
        <TextField
        style={{marginTop: '10px'}}
          label="Сколько длится курс"
          name="duration"
          value={courseData.duration}
          onChange={handleChange}
          fullWidth
        />
        <TextField
        style={{marginTop: '10px'}}
          label="Стоимость"
          name="price"
          value={courseData.price}
          onChange={handleChange}
          fullWidth
        />
        <FormControlLabel
        style={{marginTop: '10px'}}
          control={
            <Checkbox
              name="givesDiplom"
              checked={courseData.givesDiplom}
              onChange={handleChange}
              color="primary"
            />
          }
          label="Дается ли диплом государственного образца"
        />

        <input type="file" name="file" />

        <Button type="submit" variant="contained" color="primary">
          Создать курс
        </Button>
      </form>
    </>
  );
}

export default AddCoursePage;
