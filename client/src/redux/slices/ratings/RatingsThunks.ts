import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RatingType, RatingFormType } from '../../../types/ratingTypes';
import { getRatings, submitRating } from '../../../services/ratingsService';

export const getRatingThunk = createAsyncThunk<number, RatingType['id']>('ratings/getRatingThunk', async (id) =>
  getRatings(id),
);
export const addRatingThunk = createAsyncThunk<
  RatingType,
  { formData: RatingFormType; courseId: RatingType['id'] }
>('ratings/addRating', ({ formData, courseId }) =>
  submitRating(formData, courseId),
);
