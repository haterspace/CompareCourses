import React from 'react';
import { Box, Dialog, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import CourseCard from './CourseCard';
import RateJob from './RateJob';
import RateOtherCourses from './RateOtherCourses';
import ComplaintForm from '../complaintUi/ComplaintForm';
import {
  closeCourseComplaintModal,
  closeEditCourseModal,
  closeRateJobModal,
  closeRateOtherModal,
} from '../../../redux/slices/modals/ModalSlice';
import EditCourseModalCard from './EditCourseModalCard';

export default function CoursesList(): JSX.Element {
  const likedCourses = useAppSelector((store) => store.likes);
  const courses = useAppSelector((store) => store.courses);
  const openForCourseComplaint = useAppSelector((store) => store.modal.isOpenCourseComplaint);
  const isOpenForRateJob = useAppSelector((store) => store.modal.isOpenForRateJob);
  const isOpenForOtherJob = useAppSelector((store) => store.modal.isOpenForOtherJob);
  const dispatch = useAppDispatch();

  return (
    <>
      <Grid container justifyContent={'center'} columnGap={2} rowGap={2} marginTop={2} wrap="wrap">
        {courses?.map((course) => (
          <Grid item xs={3} key={course.id}>
            <CourseCard key={course.id} course={course} likedCourses={likedCourses} />
          </Grid>
        ))}
      </Grid>
      <Dialog open={!!openForCourseComplaint} onClose={() => dispatch(closeCourseComplaintModal())}>
        {openForCourseComplaint && <ComplaintForm courseId={openForCourseComplaint} />}
      </Dialog>
      <Dialog open={!!isOpenForRateJob} onClose={() => dispatch(closeRateJobModal())}>
        <RateJob />
      </Dialog>
      <Dialog open={!!isOpenForOtherJob} onClose={() => dispatch(closeRateOtherModal())}>
        <RateOtherCourses />
      </Dialog>
    </>
  );
}
