import type { CourseFormType, CourseType } from '../types/courseType';
import apiService from './config';

export const getCourses = async (pageNum: CourseType['id'] | null): Promise<CourseType[]> => {
  const { data } = await apiService<CourseType[]>(`/courses/paginatedCourses/${pageNum}`);
  return data;
};

export const getCourse = async (id: CourseType['id']): Promise<CourseType> => {
  const { data } = await apiService<CourseType>(`/courses/${id}`);
  return data;
};

export const submitCourse = async (formData: CourseFormType): Promise<CourseType> => {
  const { data } = await apiService.post<CourseType>('/courses', formData);
  return data;
};

export const deleteCourse = async (id: CourseType['id']): Promise<CourseType['id']> => {
  await apiService.delete(`/courses/${id}`);
  return id;
};

export const editCourse = async (
  id: CourseType['id'],
  formData: CourseFormType,
): Promise<CourseType> => {
  const { data } = await apiService.patch<CourseType>(`/courses/${id}`, formData);
  return data;
};

export const findCourse = async (name: string) => {
  try {
    const response = await apiService.post('/search', { name });
    return response.data;
  } catch (error) {
    throw error;
  }
};
