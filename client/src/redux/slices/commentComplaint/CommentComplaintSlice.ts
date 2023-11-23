import { createSlice } from '@reduxjs/toolkit';

import { CommentComplaintType } from '../../../types/commentComplaintTypes';
import { submitCommentComplaintThunk } from './CommentComplaintThunks';

type CommentComplaintState = CommentComplaintType[];
const initialState: CommentComplaintState = [];

export const courseComplaintSlice = createSlice({
  name: 'commentComplaint',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder.addCase(getCourseComplaintsThunk.fulfilled, (state, action) => action.payload);
    // builder.addCase(getCourseComplaintsThunk.rejected, (state, action) => []);

    builder.addCase(submitCommentComplaintThunk.fulfilled, (state, action) => [
      action.payload,
      ...state,
    ]);
    builder.addCase(submitCommentComplaintThunk.rejected, (state, action) => state);

  //   builder.addCase(deleteCourseComplaintThunk.fulfilled, (state, action) =>
  //     state.filter((el) => el.id !== action.payload),
  //   );
  //   builder.addCase(deleteCourseComplaintThunk.rejected, (state, action) => state);
  },
});

export default courseComplaintSlice.reducer;
