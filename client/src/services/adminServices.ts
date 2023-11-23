import { CommentType } from '../types/CommentTypes';
import { AdminCommentComplaintType, AdminCourseComplaintType } from '../types/adminPageTypes';
import { CourseType } from '../types/courseType';
import apiService from './config';

export const getAdminCourseComplaintsService = async (): Promise<AdminCourseComplaintType[]> => {
  const { data } = await apiService<AdminCourseComplaintType[]>('/adminPage/courseComplaints');
  return data;
};

export const getAdminCommentComplaintService = async (): Promise<AdminCommentComplaintType[]> => {
  const { data } = await apiService<AdminCommentComplaintType[]>('/adminPage/commentComplaints');
  return data;
};

export const setNeedToModerateFalseService = async (
  id: CourseType['id'],
): Promise<CourseType['id']> => {
  const { data } = await apiService.post<CourseType['id']>(`/adminPage/courseComplaint/${id}`);
  return data;
};

export const setNeedToModerateCommentFalseService = async (
  id: CommentType['id'],
): Promise<CommentType['id']> => {
  const { data } = await apiService.post<CommentType['id']>(`/adminPage/commentComplaint/${id}`);
  return data;
};

export const deleteAdminCourseComplaintService = async (
  id: CourseType['id'],
): Promise<AdminCourseComplaintType['id']> => {
  await apiService.delete(`/adminPage/${id}`);
  return id;
};

export const deleteAdminCommentComplaintService = async (
  id: CommentType['id'],
): Promise<AdminCommentComplaintType['id']> => {
  await apiService.delete(`/adminPage/${id}`);
  return id;
};

export const deleteCommentByAdminService = async (
  id: CommentType['id'],
): Promise<CommentType['id']> => {
  await apiService.delete(`/adminPage/deleteComment/${id}`);
  return id;
};

export const deleteCourseByAdminService = async (
  id: CourseType['id'],
): Promise<CourseType['id']> => {
  await apiService.delete(`/adminPage/deleteCourse/${id}`);
  return id;
};
