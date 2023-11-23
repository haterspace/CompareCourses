import { Card, CardContent, TextField, Typography, Button } from '@mui/material';
import React from 'react';
import { AdminCommentComplaintType } from '../../../types/adminPageTypes';
import { useAppDispatch } from '../../../redux/hooks';
import {
  deleteCommentByAdminThunk,
  setNeedToModerateCommentFalseByAdminThunk,
} from '../../../redux/slices/admin/AdminThunks';

type ComplaintCommentCardProps = {
  commentComplaint: AdminCommentComplaintType;
};

export default function ComplaintCommentCard({ commentComplaint }: ComplaintCommentCardProps) {
  const dispatch = useAppDispatch();
  return (
    <div style={{ marginBottom: '500px' }}>
      <Card>
        <CardContent>
          <Typography variant="h6">Текст комментария:{commentComplaint.Comment.body}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h8">
            Жалоба от пользователя:{commentComplaint.User.username}
          </Typography>
          <Typography variant="h6">Текст жалобы:{commentComplaint.body}</Typography>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          dispatch(setNeedToModerateCommentFalseByAdminThunk(commentComplaint.Comment.id))
        }
      >
        Оставить
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(deleteCommentByAdminThunk(commentComplaint.Comment.id))}
      >
        Удалить
      </Button>
    </div>
  );
}
