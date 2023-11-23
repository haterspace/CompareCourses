import { CommentType } from '../types/CommentTypes';
import { CommentComplaintFormType, CommentComplaintType } from '../types/commentComplaintTypes';
import apiService from './config';

export const submitCommentComplaintService = async (
  formData: CommentComplaintFormType,
): Promise<CommentComplaintType> => {
  const { data } = await apiService.post<CommentComplaintType>('/commentComplaints', formData);
  return data;
};

export const deleteCommentComplaintService = async (
  id: CommentType['id'],
): Promise<CommentComplaintType['id']> => {
  await apiService.delete(`/commentComplaints/${id}`);
  return id;
};
