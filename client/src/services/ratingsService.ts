import apiService from './config';
import type { RatingType, RatingFormType } from '../types/ratingTypes';

export const getRatings = async (courseId: RatingType['courseId']): Promise<number> => {
  const { data } = await apiService<number>(`ratings/${courseId}`);
  console.log(data);

  return data;
};
export const submitRating = async (
  formData: RatingFormType,
  id: RatingType['id'],
): Promise<RatingType> => {
  const { data } = await apiService.post<RatingType>(`ratings/${id}`, formData);
  return data;
};
