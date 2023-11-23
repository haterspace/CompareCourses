import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompanyFormType, CompanyType } from '../../../types/companyType';
import { editProfile, getCompanyCourses, getCompanyInfo } from '../../../services/companyServices';
import { CourseType } from '../../../types/courseType';
import { changeCompanyPic } from './companySlice';
import apiService from '../../../services/config';

export const getCompanyInfoThunk = createAsyncThunk<CompanyType, CompanyType['id']>(
  '/profile/getCompanyInfoThunk',
  async (id: CompanyType['id']) => getCompanyInfo(id),
);

export const editProfileThunk = createAsyncThunk<
  CompanyType,
  { id: CompanyType['id']; formData: CompanyFormType }
>('profile/editProfileThunk', async ({ id, formData }) => editProfile(id, formData));

export const getCompanyCoursesThunk = createAsyncThunk<CourseType[], CompanyType['id']>(
  '/profile/companyCoursesThunk',
  async (id: CompanyType['id']) => getCompanyCourses(id),
);

export const changeCompanyProfilePicThunk = createAsyncThunk<string, CompanyType['img']>(
  '/profile/changeCompanyPicThunk',
  async (img: CompanyType['img'], { dispatch }): Promise<string> => {
    const { data } = await apiService.post('/multer/company', img);
    dispatch(changeCompanyPic(data));
    return data;
  },
);
