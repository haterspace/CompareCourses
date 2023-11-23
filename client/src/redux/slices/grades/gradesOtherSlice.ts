import { createSlice } from '@reduxjs/toolkit';
import { addOtherGradesThunk, getOtherGradesThunk } from './gradesThunks';
import { GradesOtherType } from '../../../types/gradesType';

type JobGradesState = GradesOtherType[];
const initialState: JobGradesState = [];

export const OtherGradesSlice = createSlice({
  name: 'gradesOther',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOtherGradesThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getOtherGradesThunk.rejected, (state, action) => []);

    builder.addCase(addOtherGradesThunk.fulfilled, (state, action) => [action.payload, ...state]);
    builder.addCase(addOtherGradesThunk.rejected, (state, action) => state);
  },
});

export default OtherGradesSlice.reducer;
