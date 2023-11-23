import { Paper, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import CourseCard from '../CourseCard';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  deleteCourseByAdminThunk,
  getAdminCourseComplaintsThunk,
  setNeedToModerateFalseByAdminThunk,
} from '../../../redux/slices/admin/AdminThunks';
import ComplaintCourseCard from './ComplaintCourseCard';
// import { Button } from '@mui/base';

export default function ComplaintCourseList() {
  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    padding: '10px',
  };

  const cardStyle = {
    // width: '8000px',
    padding: '20px',
    borderRadius: '10px',
    background: '#2e2e2e',
    color: '#ffffff',
    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAdminCourseComplaintsThunk());
  }, []);

  const adminCourseComplaints = useAppSelector((store) => store.adminCourseComplaints.adminCourse);

  console.log(adminCourseComplaints);

  return (
    <Paper elevation={3} style={{ padding: '10px', borderRadius: '10px' }}>
      <Box sx={cardContainerStyle}>
        {adminCourseComplaints?.map((complaint) => (
          <Paper elevation={3} key={complaint.id}>
            <Typography>Жалоба от пользователя:{complaint.User.username}</Typography>
            <Typography>Текст жалобы:{complaint.body}</Typography>
            <ComplaintCourseCard complaint={complaint} />

            <Button
              variant="contained"
              size="small"
              onClick={() => dispatch(setNeedToModerateFalseByAdminThunk(complaint.Course.id))}
            >
              Оставить
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => dispatch(deleteCourseByAdminThunk(complaint.Course.id))}
            >
              Удалить курс
            </Button>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
}
