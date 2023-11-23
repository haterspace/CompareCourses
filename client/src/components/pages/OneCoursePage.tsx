import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCourseThunk } from '../../redux/slices/course/courseThunk';
import CommentForm from '../ui/commentUi/CommentForm';
import CommentList from '../ui/commentUi/CommentList';
import StarRating from './RatingsPage';
import { getRatingThunk } from '../../redux/slices/ratings/RatingsThunks';

function OneCoursePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    void dispatch(getCourseThunk(Number(id)));
    void dispatch(getRatingThunk(Number(id)));
  }, []);
  const course = useAppSelector((store) => store.courses)[0];
  const user = useAppSelector((store) => store.user);
  const rating = useAppSelector((store) => store.ratings);
  // console.log(rating, 'AAAAAA');

  return (
    <div className="flexer">
      <Grid>
        <Typography variant="h2" gutterBottom>
          {course?.name}
        </Typography>
        <Typography marginTop={5} variant="h5" gutterBottom>
          Длительность: {course?.duration} мес.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Формат курса: {course?.format}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Описание: {course?.desc}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Дает диплом: {course?.givesDiplom ? 'Да' : 'Нет'}
        </Typography>
        {rating && (
          <Typography variant="h5" gutterBottom>
            Рейтинг курса:{' '}
            {rating[0]?.rate === undefined ? (
              <span>{rating[0]}</span>
            ) : (
              <span>{rating[0].rate}</span>
            )}
          </Typography>
        )}
        {user.status === 'logged' && <StarRating course={course} />}
        {user.status === 'logged' && <CommentForm />}
        <CommentList />
      </Grid>
      <img src={course?.img} alt="" />
    </div>
  );
}

export default OneCoursePage;
