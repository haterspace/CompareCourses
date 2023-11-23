import React, { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import {editUserProfileThunk} from '../../redux/slices/user/UserThunks';
import { UserType } from '../../types/userTypes';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  user: UserType
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function EditUserModalCard({
    user,
    open,
    setOpen,
  }: ModalProps): JSX.Element {
    const dispatch = useAppDispatch();
    const [editInput, setEditInput] = useState<UserType>(user);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editHandler = async (): Promise<void> => {
   void dispatch(editUserProfileThunk({ formData: editInput }));
    setOpen(false);
  };

  return (
    <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={modalStyle}>
        <TextField
          placeholder="Name"
          fullWidth
          margin="normal"
          name="username"
          value={editInput.username}
          onChange={changeHandler}
        />
        <TextField
          placeholder="Description"
          fullWidth
          margin="normal"
          name="email"
          value={editInput.email}
          onChange={changeHandler}
              />
        <Button onClick={editHandler}>Save Changes</Button>
        <Button onClick={editHandler}>Cancel</Button>
      </Box>
    </Modal>
  );
};