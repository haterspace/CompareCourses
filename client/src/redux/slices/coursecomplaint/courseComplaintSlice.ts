import { createSlice } from '@reduxjs/toolkit';
import { CourseComplaintType } from '../../../types/courseComplaintTypes';
import {
  deleteCourseComplaintThunk,
  getCourseComplaintsThunk,
  submitCourseComplaintThunk,
} from './courseComplaintThunks';

type CoursesComplaintState = CourseComplaintType[];
const initialState: CoursesComplaintState = [];

export const courseComplaintSlice = createSlice({
  name: 'courseComplaint',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCourseComplaintsThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getCourseComplaintsThunk.rejected, (state, action) => []);

    builder.addCase(submitCourseComplaintThunk.fulfilled, (state, action) => [
      action.payload,
      ...state,
    ]);
    builder.addCase(submitCourseComplaintThunk.rejected, (state, action) => state);

    builder.addCase(deleteCourseComplaintThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload),
    );
    builder.addCase(deleteCourseComplaintThunk.rejected, (state, action) => state);
  },
});

export default courseComplaintSlice.reducer;
