import { CompanyFormType, CompanyType } from '../types/companyType';
import { CourseType } from '../types/courseType';
import { UserWithCompanyType } from '../types/userTypes';
import apiService from './config';

export const getCompanyInfo = async (id: CompanyType['id']): Promise<CompanyType> => {
  const { data } = await apiService<UserWithCompanyType>(`/profile/${id}`);
  return data.Company;
};

export const getCompanyCourses = async (id: CompanyType['id']): Promise<CourseType[]> => {
  const { data } = await apiService<CourseType[]>(`/profile/companyCourses/${id}`);
  return data;
};

export const editProfile = async (
  id: CompanyType['id'],
  formData: CompanyFormType,
): Promise<CompanyType> => {
  const { data } = await apiService.patch<CompanyType>(`/profile/${id}`, formData);
  return data;
};
