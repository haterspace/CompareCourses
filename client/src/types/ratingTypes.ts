export type RatingType = {
  id: number;
  userId: number;
  courseId: number;
  rate: number;
}

export type RatingFormType = Omit<RatingType, 'userId' | 'courseId' | 'id'>;