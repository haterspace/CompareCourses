import { createSlice } from '@reduxjs/toolkit';
import { addLikeThunk, getLikedCoursesThunk, removeLikeThunk } from './likedCoursesThunk';
import { CourseType } from '../../../types/courseType';

type LikedCoursesState = CourseType[];
const initialState: LikedCoursesState = [];

export const likedCourseSlice = createSlice({
  name: 'likedCourses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikedCoursesThunk.fulfilled, (state, action) =>
      action.payload.map((el) => el.Course),
    );
    builder.addCase(addLikeThunk.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(removeLikeThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload),
    );
  },
});

export default likedCourseSlice.reducer;
