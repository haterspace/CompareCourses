import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { UserType } from '../../../types/userTypes';
import { Button, Grid, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import EditUserModalCard from '../ui/EditUserModalCard';
import apiService from '../../services/config';
import { changeUserPicThunk } from '../../redux/slices/user/UserThunks';

export default function UserProfile(): JSX.Element {
  //   const { id } = useParams();
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  // useEffect(() => {
  //   void dispatch(getUserThunk(Number(user?.id)));
  // }, []);
  //   console.log(user);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // const description = e.currentTarget.description as HTMLInputElement;
    const fileInput = e.currentTarget.file as HTMLInputElement;
    if (!fileInput.files[0]) return;
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('id', user?.id);
    e.currentTarget.reset();
    // apiService.post('/multer/user', formData).then(console.log).catch(console.log);
    dispatch(changeUserPicThunk(formData));
  };
  console.log(user);

  return (
    <Grid className="personecard">
      <Grid className="avatar">
        <CardMedia
          className="avatarka"
          component="img"
          alt="user photo"
          height="300"
          image={`http://localhost:3001/img/${user?.img}`}
        />
        <form className="formotpra" onSubmit={submitHandler}>
          <input type="file" name="file" />
          <Button style={{ marginTop: '30px' }} variant="contained" color="primary" type="submit">
            Загрузить файл
          </Button>
        </form>
      </Grid>
      <Grid item xs={8}>
        <CardContent>
          <Typography variant="h5" marginBottom={5}>
            Данные профиля:
          </Typography>
          <Typography marginBottom={5}>Имя: {user?.username}</Typography>
          <Typography>Адрес электронной почты: {user?.email}</Typography>
          <CardActions style={{ justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
              Изменить
            </Button>
            {open && <EditUserModalCard user={user} open={open} setOpen={setOpen} />}
          </CardActions>
        </CardContent>
      </Grid>
    </Grid>
  );
}
