import { createAsyncThunk } from '@reduxjs/toolkit';
import { AdminCommentComplaintType, AdminCourseComplaintType } from '../../../types/adminPageTypes';
import {
  deleteAdminCourseComplaintService,
  deleteCommentByAdminService,
  deleteCourseByAdminService,
  getAdminCommentComplaintService,
  getAdminCourseComplaintsService,
  setNeedToModerateCommentFalseService,
  setNeedToModerateFalseService,
} from '../../../services/adminServices';
import { CourseType } from '../../../types/courseType';
import { CommentType } from '../../../types/CommentTypes';

export const getAdminCourseComplaintsThunk = createAsyncThunk<AdminCourseComplaintType[]>(
  '/admin/getAdminCourseComplaintsThunks',
  async () => getAdminCourseComplaintsService(),
);

export const getAdminCommentComplaintsThunk = createAsyncThunk<AdminCommentComplaintType[]>(
  '/admin/getAdminCommentComplaintsThunk',
  async () => getAdminCommentComplaintService(),
);

export const setNeedToModerateFalseByAdminThunk = createAsyncThunk<
  CourseType['id'],
  CourseType['id']
>('/admin/setNeedToModerateFalseByAdminThunk', async (id) => setNeedToModerateFalseService(id));

export const setNeedToModerateCommentFalseByAdminThunk = createAsyncThunk<
  CommentType['id'],
  CommentType['id']
>('/admin/setNeedToModerateCommentFalseByAdminThunk', async (id) =>
  setNeedToModerateCommentFalseService(id),
);

export const deleteAdminCourseComplaintThunk = createAsyncThunk<
  AdminCourseComplaintType['id'],
  { id: AdminCourseComplaintType['id'] }
>('/admin/freezeCourseComplaintThunk', async ({ id }) => deleteAdminCourseComplaintService(id));

export const deleteCommentByAdminThunk = createAsyncThunk<CommentType['id'], CommentType['id']>(
  '/admin/deleteComment',
  async (id) => deleteCommentByAdminService(id),
);

export const deleteCourseByAdminThunk = createAsyncThunk<CourseType['id'], CourseType['id']>(
  '/admin/deleteCourse',
  async (id) => deleteCourseByAdminService(id),
);
