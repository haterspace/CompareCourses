import type { CommentFormType, CommentType } from '../types/CommentTypes';
import apiService from './config';

export const getComments = async (id: CommentType['id']): Promise<CommentType[]> => {
  const { data } = await apiService<CommentType[]>(`/comments/${id}`);
  return data;
};

export const submitComment = async (
  id: CommentType['id'],
  formData: CommentFormType,
): Promise<CommentType> => {
  const { data } = await apiService.post<CommentType>(`/comments/${id}`, formData);
  return data;
};

export const deleteComment = async (id: CommentType['id']): Promise<CommentType['id']> => {
  await apiService.delete(`/comments/${id}`);
  return id;
};
