export type CourseComplaintType = {
  id: number;
  userId: number;
  courseId: number;
  body: string;
};

export type CourseComplaintFormType = Omit<CourseComplaintType, 'id' | 'userId' | 'courseId'>;
