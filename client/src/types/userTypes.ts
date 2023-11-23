import { CompanyType } from './companyType';

export type UserType = {
  id: number;
  username: string;
  email: string;
  type: string;
  img: string;
};

export type UserSignUpType = Omit<UserType, 'id'> & { password: string };
export type UserLoginType = Omit<UserSignUpType, 'username'>;

export type UserLoadingType =
  | (UserType & { status: 'logged' })
  | { status: 'loading' }
  | { status: 'guest' };

export type UserWithCompanyType = UserType & { Company: CompanyType };
// Omit<UserType, 'id'|'username'|'email'>
