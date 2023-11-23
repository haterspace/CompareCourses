import { createSlice } from '@reduxjs/toolkit';
import type { RatingType } from '../../../types/ratingTypes';
import { getRatingThunk, addRatingThunk } from './RatingsThunks';

type RatingsState = RatingType[];
const initialState: RatingsState = [];

export const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRatingThunk.fulfilled, (state, action) => [action.payload]);
    builder.addCase(getRatingThunk.rejected, (state, action) => []);

    builder.addCase(addRatingThunk.fulfilled, (state, action) => [action.payload, ...state]);
    builder.addCase(addRatingThunk.rejected, (state, action) => state);

    //  builder.addCase(updateRatingThunk.fulfilled, (state, action) =>
    //    state.map(el => el.id === action.payload.id ? action.payload : el)
    //  )
    //  builder.addCase(updateRatingThunk.rejected, (state, action) => state);
  },
});

export default ratingsSlice.reducer;
