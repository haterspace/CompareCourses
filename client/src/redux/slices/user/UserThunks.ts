import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  checkUser,
  codeService,
  userLogin,
  userLogout,
  userSignUp,
} from '../../../services/userService';
import type { UserLoginType, UserSignUpType, UserType } from '../../../types/userTypes';
import { editProfile } from '../../../services/userService';
import { ConfirmCodeFormType, ConfirmCodeType } from '../../../types/confirmCodeType';
import apiService from '../../../services/config';
import { changePic } from './UserSlice';

export const checkUserThunk = createAsyncThunk<UserType>('user/checkUserThunk', () => checkUser());

export const loginHandlerThunk = createAsyncThunk<UserType, UserLoginType>(
  'user/loginHandlerThunk',
  (formData) => userLogin(formData),
);

export const signUpHandlerThunk = createAsyncThunk<UserType, UserSignUpType>(
  'user/signUpHandlerThunk',
  (formData) => userSignUp(formData),
);

export const logoutHandlerThunk = createAsyncThunk('user/logoutHandlerThunk', () => {
  userLogout().then(() => undefined);
});

export const editUserProfileThunk = createAsyncThunk<
  UserType,
  { id: UserType['id']; formData: UserType }
>('profile/editProfileThunk', async ({ id, formData }) => editProfile(id, formData));

export const changeUserPicThunk = createAsyncThunk<string, UserType['img']>(
  'user/changeUserPicThunk',
  async (img: UserType['img'], { dispatch }): Promise<string> => {
    const { data } = await apiService.post('/multer/user', img);
    dispatch(changePic(data));
    return data;
  },
);

// export const codeThunk = createAsyncThunk<ConfirmCodeType, ConfirmCodeFormType>(
//   'user/codeThunk',
//   (formData) => codeService(formData));
