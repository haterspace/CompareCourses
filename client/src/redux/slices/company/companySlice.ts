import { createSlice } from '@reduxjs/toolkit';
import { editProfileThunk, getCompanyCoursesThunk, getCompanyInfoThunk } from './companyThunk';
import { CompanyType } from '../../../types/companyType';
import { CourseType } from '../../../types/courseType';

// type CompanyState = CompanyType[];
// const initialState: CompanyState = [];

// export const companySlice = createSlice({
//   name: 'company',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getCompanyInfoThunk.fulfilled, (state, action) => [action.payload]);
//     builder.addCase(getCompanyInfoThunk.rejected, (state, action) => []);
//     builder.addCase(editProfileThunk.fulfilled, (state, action) =>
//       state.map((company) => (company.id === action.payload.id ? action.payload : company)),
//     );
//     builder.addCase(editProfileThunk.rejected, (state, action) => []);
//     builder.addCase(getCompanyCoursesThunk.fulfilled, (state, action) => action.payload);

//   },
// });

type CompanyState = {
  companies: CompanyType[];
  companyCourses: CourseType[];
};
const initialState: CompanyState = {
  companies: [],
  companyCourses: [],
};

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    changeCompanyPic: (state, action) => ({ ...state, ['img']: action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(getCompanyInfoThunk.fulfilled, (state, action) => {
      state.companies = [action.payload];
    });

    builder.addCase(getCompanyInfoThunk.rejected, (state, action) => {
      state.companies = [];
    });
    builder.addCase(editProfileThunk.fulfilled, (state, action) => {
      state.companies = state.companies.map((company) =>
        company.id === action.payload.id ? action.payload : company,
      );
    });
    builder.addCase(editProfileThunk.rejected, (state, action) => {
      state.companies = [];
    });
    builder.addCase(getCompanyCoursesThunk.fulfilled, (state, action) => {
      state.companyCourses = action.payload;
    });
  },
});


export const {changeCompanyPic} = companySlice.actions

export default companySlice.reducer;
