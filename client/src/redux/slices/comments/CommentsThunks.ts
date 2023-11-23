import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CommentFormType, CommentType } from '../../../types/CommentTypes';
import { deleteComment, getComments, submitComment } from '../../../services/commentsServices';

export const getCommentsThunk = createAsyncThunk<CommentType[], CommentType['id']>(
  '/Comment/getCommentThunk',
  async (id) => getComments(id),
);
export const addCommentThunk = createAsyncThunk<
  CommentType,
  { id: CommentType['id']; formData: CommentFormType }
>('/Comment/addCommentThunk', async ({ id, formData }) => submitComment(id, formData));

export const deleteCommentThunk = createAsyncThunk<CommentType['id'], { id: CommentType['id'] }>(
  '/Comment/deleteCommentThunk',
  async ({ id }) => deleteComment(id),
);
