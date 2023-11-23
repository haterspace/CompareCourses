import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getJobGrades,
  getOtherGrades,
  submitJobGrade,
  submitOtherGrade,
} from '../../../services/gradesService';
import {
  GradesJobFormType,
  GradesJobType,
  GradesOtherFormType,
  GradesOtherType,
} from '../../../types/gradesType';

export const getJobGradesThunk = createAsyncThunk<GradesJobType[]>('/note/getNoteThunk', async () =>
  getJobGrades(),
);

export const addJobGradesThunk = createAsyncThunk<
  GradesJobType,
  { id: GradesJobType['id']; formData: GradesJobFormType }
>('/grades/addGradesThunk', async ({ id, formData }) => submitJobGrade(id, formData));

export const getOtherGradesThunk = createAsyncThunk<GradesOtherType[]>(
  '/note/getOtherCOurses',
  async () => getOtherGrades(),
);

export const addOtherGradesThunk = createAsyncThunk<
  GradesOtherType,
  { id: GradesOtherType['id']; formData: GradesOtherFormType }
>('/grades/addOtherGradesThunk', async ({ id, formData }) => submitOtherGrade(id, formData));
