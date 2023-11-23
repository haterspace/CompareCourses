export type CommentComplaintType = {
    id: number;
    userId: number;
    commentId: number;
    body: string;
  };
  
  export type CommentComplaintFormType = Omit<CommentComplaintType, 'id' | 'userId' | 'commentId'>;