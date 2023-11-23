import { CompanyType } from './companyType';

export type CourseType = {
  id: number;
  name: string;
  desc: string;
  url: string;
  companyId?: number;
  categoryId: number;
  format: string;
  price: number;
  duration: number;
  freezed?: boolean;
  givesDiplom?: boolean;
  rating?: number;
  Company?: CompanyType;
  img?: string;
};

export type CourseFormType = Omit<CourseType, 'id'> & {
  category: string;
};

export type ResultCourseType = {
  rows: CourseType[];
  count: number;
};
