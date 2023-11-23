import { CourseType } from './courseType';

export type GradesJobType = {
  id: Number;
  support: number;
  actualInfo: number;
  portfolio: number;
  salaryAverage: number;
  userId: number;
  courseId: number;
  Course?: CourseType;
};

export type GradesJobFormType = Omit<GradesJobType, 'id' | 'userId' | 'courseId'>;

export type GradesOtherType = {
  id: number;
  practicalTasks: number;
  instructors: number;
  realLifeApplication: number;
  userId: number;
  courseId: number;
  Course?: CourseType;
};

export type GradesOtherFormType = Omit<GradesOtherType, 'id' | 'userId' | 'courseId'>;
