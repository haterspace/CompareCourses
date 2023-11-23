import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from '../../../redux/hooks';
import { submitCommentComplaintThunk } from '../../../redux/slices/commentComplaint/CommentComplaintThunks';

type ComplaintCommentModalProps = {
  handleClose: () => void;
  commentId: Number;
};
export default function ComplaintCommentModal({
  handleClose,
  commentId,
}: ComplaintCommentModalProps): JSX.Element {
  const [formData, setFormData] = useState({
    body: '',
    commentId: commentId,
  });

 


  console.log(formData);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  //   const handleClose = ():void => {
  //     setOpen(false);
  //   };
  // const [input, setBody] = useState({ body: '' });

  const dispatch = useAppDispatch();

  return (
    <div>
      <DialogTitle>Жалоба</DialogTitle>
      <DialogContent>
        <DialogContentText>Опишите, пожалуйста, подробно суть претензии</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Суть претензии"
          type="text"
          fullWidth
          variant="standard"
          name="body"
          value={formData.body}
          onChange={changeHandler}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отменить</Button>
        <Button
          onClick={() => {
            dispatch(submitCommentComplaintThunk(formData));
            handleClose();
          }}
        >
          Отправить
        </Button>
      </DialogActions>
    </div>
  );
}
