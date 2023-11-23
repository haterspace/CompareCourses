import type { UserType } from './userTypes';

export type CommentType = {
  id: number;
  userId: number;
  courseId: number;
  body: string;
  needToModerate: boolean;
  User: UserType;
};

export type CommentFormType = Omit<CommentType, 'userId' | 'courseId' | 'id' | 'needToModerate'>;
