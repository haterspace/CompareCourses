import { Box, Dialog, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CourseCard from '../ui/CourseUI/CourseCard';
import EditCourseModalCard from '../ui/CourseUI/EditCourseModalCard';
import {
  closeCourseComplaintModal,
  closeEditCourseModal,
  closeRateJobModal,
  closeRateOtherModal,
} from '../../redux/slices/modals/ModalSlice';
import RateOtherCourses from '../ui/CourseUI/RateOtherCourses';
import ComplaintForm from '../ui/complaintUi/ComplaintForm';
import RateJob from '../ui/CourseUI/RateJob';
import { getCompanyCoursesThunk } from '../../redux/slices/company/companyThunk';

function MyCoursesPage(): JSX.Element {
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    if (user.status === 'logged' && user.type === 'Course') {
      void dispatch(getCompanyCoursesThunk(user.Company.id));
    }
  }, []);
  const allCourses = useAppSelector((store) => store.company.companyCourses);

  const dispatch = useAppDispatch();
  const openForCourseComplaint = useAppSelector((store) => store.modal.isOpenCourseComplaint);
  const isOpenForRateJob = useAppSelector((store) => store.modal.isOpenForRateJob);
  const isOpenForOtherJob = useAppSelector((store) => store.modal.isOpenForOtherJob);
  const isOpenForEditCourseModal = useAppSelector((store) => store.modal.isOpenForEditCourseModal);
  const likedCourses = useAppSelector((store) => store.likes);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Ваши курсы
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {allCourses?.map((course) => (
          <CourseCard key={course.id} course={course} likedCourses={likedCourses} />
        ))}
      </Box>
      <Dialog open={!!openForCourseComplaint} onClose={() => dispatch(closeCourseComplaintModal())}>
        {openForCourseComplaint && <ComplaintForm courseId={openForCourseComplaint} />}
      </Dialog>
      <Dialog open={!!isOpenForRateJob} onClose={() => dispatch(closeRateJobModal())}>
        <RateJob />
      </Dialog>
      <Dialog open={!!isOpenForOtherJob} onClose={() => dispatch(closeRateOtherModal())}>
        <RateOtherCourses />
      </Dialog>
      <Dialog
        open={!!isOpenForEditCourseModal}
        onClose={() => dispatch(closeEditCourseModal())}
        style={{ width: '100%', height: '100%' }}
      >
        <EditCourseModalCard />
      </Dialog>
    </>
  );
}

export default MyCoursesPage;
