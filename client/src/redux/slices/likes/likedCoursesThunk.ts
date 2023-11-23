import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LikedCourseType } from '../../../types/likedCoursesType';
import type { CourseType } from '../../../types/courseType';
import { addLike, getLikedCourses, removeLike } from '../../../services/likedCoursesService';

export const getLikedCoursesThunk = createAsyncThunk<LikedCourseType[]>(
  'courses/getLikedCoursesThunk',
  async () => getLikedCourses(),
);

export const addLikeThunk = createAsyncThunk<LikedCourseType, CourseType>(
  'liked/addCoursesToLikedThunk',
  async (course) => addLike(course),
);
export const removeLikeThunk = createAsyncThunk<LikedCourseType['id'], { id: CourseType['id'] }>(
  'liked/removeLikeThunk',
  async ({ id }) => removeLike(id),
);
