import { createSlice } from '@reduxjs/toolkit';
import {
  addCourseThunk,
  deleteCourseThunk,
  editCourseThunk,
  getCourseThunk,
  getCoursesThunk,
} from './courseThunk';
import type { CourseType } from '../../../types/courseType';

// type CoursesState = { courses: CourseType[]; course: {} };
// const initialState: CoursesState = { courses: [], course: {} };

type CoursesState = CourseType[]
const initialState: CoursesState = [];

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoursesThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getCoursesThunk.rejected, (state, action) => []);

    builder.addCase(getCourseThunk.fulfilled, (state, action) => [action.payload]);
    builder.addCase(getCourseThunk.rejected, (state, action) => []);

    builder.addCase(addCourseThunk.fulfilled, (state, action) => [action.payload, ...state]);
    builder.addCase(addCourseThunk.rejected, (state, action) => state);

    builder.addCase(deleteCourseThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload),
    );
    builder.addCase(deleteCourseThunk.rejected, (state, action) => state);
    builder.addCase(editCourseThunk.fulfilled, (state, action) =>
      state.map((course) => (course.id === action.payload.id ? action.payload : course)),
    );
  },
});

export default coursesSlice.reducer;
