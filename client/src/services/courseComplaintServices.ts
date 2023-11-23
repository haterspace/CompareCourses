import type { AxiosResponse } from 'axios';
import apiService from './config';
import { CourseComplaintFormType, CourseComplaintType } from '../types/courseComplaintTypes';
import { CourseType } from '../types/courseType';

export const getCourseComplaintsService = async (): Promise<CourseComplaintType[]> => {
  const { data } = await apiService<CourseComplaintType[]>('/courseComplaints');
  return data;
};

export const submitCourseComplaintService = async (
  formData: CourseComplaintFormType,
): Promise<CourseComplaintType> => {
  const { data } = await apiService.post<CourseComplaintType>('/courseComplaints', formData);
  return data;
};


export const deleteCourseComplaintService = async (id: CourseType['id']):Promise<CourseComplaintType['id']> => {
await apiService.delete(`/courseComplaints/${id}`)
return id
}


export const deleteCourseByAdmin = async (id: CourseType['id']): Promise<CourseType['id']> => {
  await apiService.delete(`/courseComplaints/adminPage/${id}`);
  return id;
};



// export const deleteBookService = async (id: BookType['id']): Promise<BookType['id']> => {
//     await apiService.delete(`/books/${id}`);
//     return id;
//   };