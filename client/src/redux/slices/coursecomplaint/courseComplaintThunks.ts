import { createAsyncThunk } from '@reduxjs/toolkit';
import { CourseComplaintFormType, CourseComplaintType } from '../../../types/courseComplaintTypes';
import {
  deleteCourseComplaintService,
  getCourseComplaintsService,
  submitCourseComplaintService,
} from '../../../services/courseComplaintServices';

export const getCourseComplaintsThunk = createAsyncThunk<CourseComplaintType[]>(
  '/courseComplaints/getCourseComplaintsThunk',
  async () => getCourseComplaintsService(),
);

export const submitCourseComplaintThunk = createAsyncThunk<
  CourseComplaintType,
  CourseComplaintFormType
>('/courseComplaints/submitComplaintThunk', async (formData) =>
  submitCourseComplaintService(formData),
);

export const deleteCourseComplaintThunk = createAsyncThunk<
  CourseComplaintType['id'],
  { id: CourseComplaintType['id'] }
>('/courseComplaints/deleteComplaintThunk', async ({ id }) => deleteCourseComplaintService(id));
