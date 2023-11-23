import { Box, Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCommentsThunk } from '../../../redux/slices/comments/CommentsThunks';
import CommentItem from './CommentItem';
import ComplaintCommentModal from '../complaintUi/ComplaintCommentModal';

function CommentList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    void dispatch(getCommentsThunk(Number(id)));
  }, []);
  const comments = useAppSelector((store) => store.comments);
  const user = useAppSelector((store) => store.user);
  const [commentId, setCommentId] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id): void => {
    setOpen(true);
    setCommentId(id);
  };

  // const [isLiked, setIsLiked] = useState(false);
  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        {comments?.map((comment) => (
          <CommentItem
            comment={comment}
            user={user}
            handleClickOpen={handleClickOpen}
            key={comment.id}
          />
        ))}
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <ComplaintCommentModal commentId={commentId} handleClose={handleClose} />
      </Dialog>
    </>
  );
}

export default CommentList;
