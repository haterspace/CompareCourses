import React, { useEffect } from 'react';
import LikedCoursesList from '../ui/likeUI/LikedCoursesList';
import { useAppDispatch } from '../../redux/hooks';
import { getLikedCoursesThunk } from '../../redux/slices/likes/likedCoursesThunk';
import { getJobGradesThunk, getOtherGradesThunk } from '../../redux/slices/grades/gradesThunks';

export default function LikedPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getLikedCoursesThunk());
    dispatch(getJobGradesThunk());
    dispatch(getOtherGradesThunk());
  }, []);
  return <LikedCoursesList />;
}
