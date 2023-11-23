import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import CourseCard from '../CourseUI/CourseCard';
import { SelectChangeEvent } from '@mui/material/Select';
import PreferencesModal from './PreferencesModal';
import { Button, Dialog, Grid } from '@mui/material';
import FilterComponent from './FilterComponent';
import LikeTableJobCourses from './LikeTableJobCourses';
import LikeTableOtherCourses from './LikeTableOtherCourses ';
import ComplaintForm from '../complaintUi/ComplaintForm';
import {
  closeCourseComplaintModal,
  closeEditCourseModal,
  closeRateJobModal,
  closeRateOtherModal,
} from '../../../redux/slices/modals/ModalSlice';
import RateJob from '../CourseUI/RateJob';
import RateOtherCourses from '../CourseUI/RateOtherCourses';
import EditCourseModalCard from '../CourseUI/EditCourseModalCard';

export default function LikedCoursesList(): JSX.Element {
  const likedCourses = useAppSelector((store) => store.likes);
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const jobCoursesGradesAll = useAppSelector((store) => store.gradesJobs);
  const otherCoursesGradesAll = useAppSelector((store) => store.gradesOther);
  const [filters, setFilters] = useState({
    format: 'Online',
    duration: 'more',
    givesDiplom: 'true',
    cost: 'cheaper',
  });

  const [courses, setCourses] = useState(likedCourses);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
    if (event.target.value === 'all') setCourses(likedCourses);
    if (event.target.value === 'job') setCourses(likedCourses.filter((el) => el.categoryId === 1));
    if (event.target.value === 'other')
      setCourses(likedCourses.filter((el) => el.categoryId !== 1));
  };

  useEffect(() => {
    if (selectedCategory === 'all' || selectedCategory === '') setCourses(likedCourses);
    if (selectedCategory === 'job') setCourses(likedCourses.filter((el) => el.categoryId === 1));
    if (selectedCategory === 'other') setCourses(likedCourses.filter((el) => el.categoryId !== 1));
  }, [likedCourses.length, selectedCategory]);

  const dispatch = useAppDispatch();
  const openForCourseComplaint = useAppSelector((store) => store.modal.isOpenCourseComplaint);
  const isOpenForRateJob = useAppSelector((store) => store.modal.isOpenForRateJob);
  const isOpenForOtherJob = useAppSelector((store) => store.modal.isOpenForOtherJob);
  const isOpenForEditCourseModal = useAppSelector((store) => store.modal.isOpenForEditCourseModal);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <FilterComponent selectedCategory={selectedCategory} handleChange={handleChange} />
      </div>
      <Button onClick={() => setOpen(true)}>Выбрать предпочтения</Button>
      <PreferencesModal open={open} setOpen={setOpen} filters={filters} setFilters={setFilters} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {selectedCategory !== '' ? (
          <div>
            {selectedCategory === 'job' ? (
              <LikeTableJobCourses likedCourses={jobCoursesGradesAll} filters={filters} />
            ) : (
              <LikeTableOtherCourses likedCourses={otherCoursesGradesAll} filters={filters} />
            )}
          </div>
        ) : (
          <h2>Выберите категорию для сравнения</h2>
        )}
        {courses.length ? (
          <Grid className="classitems">
            {courses?.map((likedCourse) => (
              <CourseCard key={likedCourse.id} course={likedCourse} likedCourses={likedCourses} />
            ))}
          </Grid>
        ) : (
          likedCourses?.map((likedCourse) => (
            <CourseCard key={likedCourse.id} course={likedCourse} likedCourses={likedCourses} />
          ))
        )}
        <Dialog
          open={!!openForCourseComplaint}
          onClose={() => dispatch(closeCourseComplaintModal())}
        >
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
      </div>
    </div>
  );
}
