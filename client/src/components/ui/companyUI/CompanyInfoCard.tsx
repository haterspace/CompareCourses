import React, { useEffect, useState } from 'react';
import { CompanyType } from '../../../types/companyType';
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';
import EditProfileModalCard from './EditProfileModal';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { CourseType } from '../../../types/courseType';
import CourseCard from '../CourseUI/CourseCard';

type CompanyCardPropsType = {
  company: CompanyType;
  courses: CourseType[];
};

export default function CompanyInfoCard({ company, courses }: CompanyCardPropsType): JSX.Element {
  const [open, setOpen] = useState(false);
  const user = useAppSelector((store) => store.user);
  console.log(courses);
  const likedCourses = useAppSelector((store) => store.likes);
  return (
    <div>
      <CardMedia component="img" alt="company logo" height="300" image={company?.img} />
      <CardContent>
        <Typography marginTop={10} marginBottom={5} variant="h5" component="div">
          <strong>
            <ArrowRightIcon />
            Название компании:
          </strong>
          {company?.name}
        </Typography>
        <Typography marginTop={5} marginBottom={5} variant="body1" color="text.first">
          <strong>
            <ArrowRightIcon />
            Описание компании:
          </strong>
          {company?.desc}
        </Typography>
        <Typography marginTop={5} marginBottom={5} variant="body1" color="text.first">
          <strong>
            <ArrowRightIcon />
            Сайт:
          </strong>
          {company?.url}
        </Typography>
        <Typography marginTop={5} marginBottom={5} variant="body1" color="text.first">
          <strong>
            <ArrowRightIcon />
            Контакты:
          </strong>
          {company?.contacts}
        </Typography>
        <Typography marginTop={5} marginBottom={5} variant="body1" color="text.first">
          <strong>
            <ArrowRightIcon />
            Адрес:
          </strong>
          {company?.address}
        </Typography>
      </CardContent>
      <CardActions className="formotpravi">
        {user.status === 'logged' && user.type === 'Course' && (
          <Button
            style={{ borderRadius: '10px' }}
            color="info"
            variant="contained"
            size="medium"
            onClick={() => setOpen(true)}
          >
            Изменить информацию
          </Button>
        )}
        {open && <EditProfileModalCard company={company} open={open} setOpen={setOpen} />}
      </CardActions>
      <div>
        {courses?.map((course) => <CourseCard likedCourses={likedCourses} course={course} />)}
      </div>
    </div>
  );
}
