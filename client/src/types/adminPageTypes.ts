import { CommentType } from './CommentTypes';
import { CourseType } from './courseType';
import type { UserType } from './userTypes';

export type AdminCourseComplaintType = {
  id: number;
  userId: number;
  courseId: number;
  body: string;
  User: UserType;
  Course: CourseType;
};

export type AdminCommentComplaintType = {
  id: number;
  userId: number;
  commentId: number;
  body: string;
  User: UserType;
  Comment: CommentType;
};
