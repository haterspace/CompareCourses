import {
  GradesJobFormType,
  GradesJobType,
  GradesOtherFormType,
  GradesOtherType,
} from '../types/gradesType';
import apiService from './config';

export const getJobGrades = async (): Promise<GradesJobType[]> => {
  const { data } = await apiService<GradesJobType[]>(`/gradeCourses/job`);
  console.log(data);

  return data;
};

export const submitJobGrade = async (
  id: GradesJobType['id'],
  formData: GradesJobFormType,
): Promise<GradesJobType> => {
  const { data } = await apiService.post<GradesJobType>(`/gradeCourses/job/${id}`, formData);
  return data;
};

export const getOtherGrades = async (): Promise<GradesOtherType[]> => {
  const { data } = await apiService<GradesOtherType[]>(`/gradeCourses/otherCourses`);
  return data;
};

export const submitOtherGrade = async (
  id: GradesOtherType['id'],
  formData: GradesOtherFormType,
): Promise<GradesOtherType> => {
  const { data } = await apiService.post<GradesOtherType>(
    `/gradeCourses/otherCourses/${id}`,
    formData,
  );
  return data;
};
