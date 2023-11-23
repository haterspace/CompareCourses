import { createSlice } from '@reduxjs/toolkit';
import { GradesJobType } from '../../../types/gradesType';
import { addJobGradesThunk, getJobGradesThunk } from './gradesThunks';

type JobGradesState = GradesJobType[];
const initialState: JobGradesState = [];

export const JobGradesSlice = createSlice({
  name: 'gradesJobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobGradesThunk.fulfilled, (state, action) => action.payload);

    builder.addCase(getJobGradesThunk.rejected, (state, action) => []);

    builder.addCase(addJobGradesThunk.fulfilled, (state, action) => [action.payload, ...state]);
    builder.addCase(addJobGradesThunk.rejected, (state, action) => state);
  },
});

export default JobGradesSlice.reducer;
