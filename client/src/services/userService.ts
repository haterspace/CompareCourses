import type { AxiosResponse } from 'axios';
import type { UserLoginType, UserSignUpType, UserType } from '../types/userTypes';
import apiService from './config';
import { ConfirmCodeFormType, ConfirmCodeType } from '../types/confirmCodeType';

export const checkUser = async (): Promise<UserType> => {
  const { data } = await apiService<UserType>('/user/check');
  return data;
};

export const userSignUp = async (formData: UserSignUpType): Promise<UserType> => {
  const { data } = await apiService.post<UserType>('/user/signup', formData);
  return data;
};

export const userLogin = async (formData: UserLoginType): Promise<UserType> => {
  const { data } = await apiService.post<UserType>('/user/login', formData);
  return data;
};

export const userLogout = async (): Promise<AxiosResponse> => apiService('/user/logout');

export const codeService = async (formData: ConfirmCodeFormType): Promise<AxiosResponse<any>> => {
  const { data } = await apiService.post<ConfirmCodeType>('/user/code', formData);
  return data;
};

export const editProfile = async (id: UserType['id'], formData: UserType): Promise<UserType> => {
  const { data } = await apiService.patch<UserType>(`/user/userProfile/${formData.id}`, formData);
  return data;
};
