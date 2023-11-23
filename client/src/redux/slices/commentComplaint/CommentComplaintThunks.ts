import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  CommentComplaintFormType,
  CommentComplaintType,
} from '../../../types/commentComplaintTypes';
import { submitCommentComplaintService } from '../../../services/commentComplaintServices';
import { CourseType } from '../../../types/courseType';
import { deleteCourse } from '../../../services/courseService';

// export const getCommentComplaint = createAsyncThunk<CommentComplaintType[]>(
//     '/commentComplaints/getCommentComplaintThunk',
//     async () => getComment

// )


export const submitCommentComplaintThunk = createAsyncThunk<
  CommentComplaintType,
  CommentComplaintFormType
>('/commentComplaints/submitCommentComplaintThunk', async (formData) =>
  submitCommentComplaintService(formData),
);

export const deleteCourseThunk = createAsyncThunk<CourseType['id'], { id: CourseType['id'] }>(
  'courses/deletePostThunk',
  async ({ id }) => deleteCourse(id),
);