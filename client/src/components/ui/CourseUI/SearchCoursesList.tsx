import { Box, Dialog, Grid } from '@mui/material';
import React from 'react';
import CourseCard from './CourseCard';
import { CourseType } from '../../../types/courseType';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
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

type SearchCoursesListProps = {
  searchResults: CourseType[] | '';
};
function SearchCoursesList({ searchResults }: SearchCoursesListProps): JSX.Element {
  const likedCourses = useAppSelector((store) => store.likes);
  const openForCourseComplaint = useAppSelector((store) => store.modal.isOpenCourseComplaint);
  const isOpenForRateJob = useAppSelector((store) => store.modal.isOpenForRateJob);
  const isOpenForOtherJob = useAppSelector((store) => store.modal.isOpenForOtherJob);
  const isOpenForEditCourseModal = useAppSelector((store) => store.modal.isOpenForEditCourseModal);

  const dispatch = useAppDispatch();
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {searchResults !== '' && searchResults.length !== 0 && (
        <Grid
          container
          justifyContent={'center'}
          columnGap={2}
          rowGap={2}
          marginTop={2}
          wrap="wrap"
        >
          {searchResults?.map((course) => (
            <Grid item xs={3} key={course.id}>
              <CourseCard key={course.id} course={course} likedCourses={likedCourses} />
            </Grid>
          ))}
        </Grid>
      )}

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
    </Box>
  );
}

export default SearchCoursesList;
