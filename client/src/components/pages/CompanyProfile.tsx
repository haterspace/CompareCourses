import React, { useEffect, useState } from 'react';
import {
  changeCompanyProfilePicThunk,
  getCompanyInfoThunk,
} from '../../redux/slices/company/companyThunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useParams } from 'react-router-dom';
import CompanyInfoCard from '../ui/companyUI/CompanyInfoCard';
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EditProfileModalCard from '../ui/companyUI/EditProfileModal';
import apiService from '../../services/config';

export default function CompanyProfile(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getCompanyInfoThunk(Number(id)));
  }, []);
  const company = useAppSelector((store) => store.company.companies[0]);
  const [open, setOpen] = useState(false);

  // const [image, setImage] = useState(null);

  // useEffect(() => {}, []);

  // const handleFileUpload = (e) => {
  //   console.log(e.currentTarget.files);
  //   setImage((prev) => e.currentTarget.files);
  // };

  // const submitHandler = () => {
  //   if (image !== null || image.length > 0) {
  //     apiService
  //       .post('/multer', image)
  //       .then((res) => console.log(res))
  //       .catch(console.log);
  //   }
  //   console.log(image);
  // };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // const description = e.currentTarget.description as HTMLInputElement;
    const fileInput = e.currentTarget.file as HTMLInputElement;
    if (!fileInput.files[0]) return;
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('id', company?.id);
    e.currentTarget.reset();
    dispatch(changeCompanyProfilePicThunk(formData));
    // apiService.post('/multer/company', formData).then(console.log).catch(console.log);
  };
  // console.log(company);

  return (
    <>
      {/* <CompanyInfoCard key={company[0]?.id} company={company[0]} /> */}
      <div>
        <CardMedia
          component="img"
          alt="company logo"
          height="300"
          image={`http://localhost:3001/img/${company?.img}`}
        />
        <CardContent>
          <Typography marginTop={10} marginBottom={5} variant="h5" component="div">
            <strong>
              <ArrowRightIcon />
              Название компании:
            </strong>{' '}
            {company?.name}
          </Typography>
          <Typography marginTop={5} marginBottom={5} variant="body1" color="text.first">
            <strong>
              <ArrowRightIcon />
              Описание компании:
            </strong>{' '}
            {company?.desc}
          </Typography>
          <Typography marginTop={5} marginBottom={5} variant="body1" color="text.first">
            <strong>
              <ArrowRightIcon />
              Сайт:
            </strong>{' '}
            {company?.url}
          </Typography>
          <Typography marginTop={5} marginBottom={5} variant="body1" color="text.first">
            <strong>
              <ArrowRightIcon />
              Контакты:
            </strong>{' '}
            {company?.contacts}
          </Typography>
          <Typography marginTop={5} marginBottom={5} variant="body1" color="text.first">
            <strong>
              <ArrowRightIcon />
              Адрес:
            </strong>{' '}
            {company?.address}
          </Typography>
        </CardContent>
        <CardActions className="formotpravi">
          <Button
            style={{ borderRadius: '10px' }}
            color="info"
            variant="contained"
            size="medium"
            onClick={() => setOpen(true)}
          >
            Изменить информацию
          </Button>
          <Typography>Фото:</Typography>
          <form onSubmit={submitHandler}>
            <input type="file" name="file" />
            <input className="btn record" type="submit" value="Загрузить файл" />
          </form>
          {/* </label> */}
          {open && <EditProfileModalCard company={company} open={open} setOpen={setOpen} />}
        </CardActions>
      </div>
    </>
  );
}
