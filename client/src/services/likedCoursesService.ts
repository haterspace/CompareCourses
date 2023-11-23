import apiService from './config';
import { LikedCourseType } from '../types/likedCoursesType';
import { CourseType } from '../types/courseType';

export const getLikedCourses = async (): Promise<LikedCourseType[]> => {
  const { data } = await apiService<LikedCourseType[]>('/like');
  return data;
};

export const addLike = async (course: CourseType): Promise<LikedCourseType> => {
  await apiService.post<LikedCourseType>(`/like/${course.id}`);
  return course;
};

export const removeLike = async (id: LikedCourseType['id']): Promise<LikedCourseType['id']> => {
  await apiService.delete<LikedCourseType>(`/like/${id}`);
  return id;
};
