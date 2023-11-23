import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { CourseType } from '../../../types/courseType';
import { addLikeThunk, removeLikeThunk } from '../../../redux/slices/likes/likedCoursesThunk';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { deleteCourseThunk } from '../../../redux/slices/course/courseThunk';
import EditCourseModalCard from './EditCourseModalCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { CardHeader, Collapse, Dialog, styled } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  closeEditCourseModal,
  openCourseComplaintModal,
  openEditCourseModal,
  openRateJobModal,
  openRateOtherModal,
} from '../../../redux/slices/modals/ModalSlice';
type CourseCardPropsType = {
  course: CourseType;
  likedCourses: CourseType[];
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CourseCard({ course, likedCourses }: CourseCardPropsType): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const aidishki = likedCourses.map((el) => el.id);
  const isLiked = aidishki.includes(course.id);
  const user = useAppSelector((store) => store.user);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isOpenForEditCourseModal = useAppSelector((store) => store.modal.isOpenForEditCourseModal);
  const [open, setOpen] = useState(false);
  return (
    <div className="cardsSravni">
      <Card sx={{ minHeight: '520px' }}>
        <CardMedia component="img" height="215" image={course?.img} alt="Chevrolet" />
        <CardHeader title={course?.name} subheader={course?.Company?.name} />
        <CardContent sx={{ minHeight: '105px' }}>
          <Typography variant="body2" color="text.secondary">
            {course?.desc?.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <div>
            <div style={{ display: 'flex' }}>
              <Button onClick={() => navigate(`/courses/${course?.id}`)}>Читать отзывы</Button>
              <Button onClick={() => navigate(`/company/${course?.id}`)}>
                Посмотреть курсы компании
              </Button>
            </div>
            {user.status === 'logged' && (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '2%' }}>
                {isLiked ? (
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => {
                      void dispatch(removeLikeThunk({ id: course.id }));
                    }}
                  >
                    убрать из сравнения
                    <FavoriteIcon />
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => {
                      void dispatch(addLikeThunk(course));
                    }}
                  >
                    сравнить
                    <FavoriteBorderIcon />
                  </Button>
                )}
              </div>
            )}

            <div style={{ display: 'flex' }}>
              <h4 style={{ padding: '0 0 0 10px' }}>Подробнее</h4>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ArrowForwardIcon />
              </ExpandMore>
            </div>
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Формат курса: {course.format}</Typography>
            <Typography paragraph>Длительность курса: {course.duration}м.</Typography>
            <Typography paragraph>Стоимость курса: {course.price} р.</Typography>
            <Typography paragraph>Дает ли диплом: {course.givesDiplom ? 'да' : 'нет'}</Typography>
            {user.status === 'logged' && (
              <>
                <Button
                  onClick={() => {
                    dispatch(openCourseComplaintModal(course.id));
                  }}
                >
                  Пожаловаться
                </Button>
                <div>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => {
                      course.categoryId === 1
                        ? dispatch(openRateJobModal(course.id))
                        : dispatch(openRateOtherModal(course.id));
                    }}
                  >
                    Проходили данный курс? Заполните форму оценки, пожалуйста!
                  </Button>
                  {user.status === 'logged' && user.id === course?.Company?.userId ? (
                    <>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => void dispatch(deleteCourseThunk({ id: course.id }))}
                      >
                        Удалить этот курс
                      </Button>
                      <Button size="small" variant="contained" onClick={() => setOpen(true)}>
                        Внести изменения
                      </Button>
                    </>
                  ) : null}
                </div>
              </>
            )}
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              style={{ width: '100%', height: '100%' }}
            >
              <EditCourseModalCard course={course} setOpen={setOpen} />
            </Dialog>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
