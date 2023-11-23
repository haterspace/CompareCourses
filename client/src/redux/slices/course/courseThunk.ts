import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CourseFormType, CourseType } from '../../../types/courseType';
import {
  deleteCourse,
  editCourse,
  getCourse,
  getCourses,
  submitCourse,
} from '../../../services/courseService';

export const getCoursesThunk = createAsyncThunk<CourseType[], CourseType['id'] | null>(
  'courses/getCoursesThunk',
  async (pageNum: CourseType['id'] | null) => getCourses(pageNum),
);
export const getCourseThunk = createAsyncThunk<CourseType, CourseType['id']>(
  'courses/getCourseThunk',
  async (id: CourseType['id']) => getCourse(id),
);

export const addCourseThunk = createAsyncThunk<CourseType, CourseFormType>(
  'courses/addPostThunk',
  async (formData) => submitCourse(formData),
);

export const deleteCourseThunk = createAsyncThunk<CourseType['id'], { id: CourseType['id'] }>(
  'courses/deletePostThunk',
  async ({ id }) => deleteCourse(id),
);

export const editCourseThunk = createAsyncThunk<
  CourseType,
  { id: CourseType['id']; formData: CourseFormType }
>('courses/editCourseThunk', async ({ id, formData }) => editCourse(id, formData));
