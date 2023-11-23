import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';
import { editProfileThunk } from '../../../redux/slices/company/companyThunk';
import { CompanyFormType, CompanyType } from '../../../types/companyType';

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
  company: CompanyType;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function EditProfileModalCard({ company, open, setOpen }: ModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [editInput, setEditInput] = useState<CompanyFormType>(company);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editHandler = async (): Promise<void> => {
    void dispatch(editProfileThunk({ formData: editInput, id: company.id }));
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
     
      <Typography>
          Название компании:
          </Typography>
        <TextField
          placeholder="Company name"
          fullWidth
          margin="normal"
          name="name"
          value={editInput.name}
          onChange={changeHandler}
        />
        <Typography marginTop={2}>Описание компании:</Typography>
        <TextField
          placeholder="Description"
          fullWidth
          margin="normal"
          name="desc"
          value={editInput.desc}
          onChange={changeHandler}
        />
        <Typography marginTop={2}>Сайт компании:</Typography>
        <TextField
          placeholder="URL"
          fullWidth
          margin="normal"
          name="url"
          value={editInput.url}
          onChange={changeHandler}
        />
        <Typography marginTop={2}>Контакты:</Typography>
        <TextField
          placeholder="Contacts"
          fullWidth
          margin="normal"
          name="contacts"
          value={editInput.contacts}
          onChange={changeHandler}
        />
        <Typography marginTop={2}>Юридический адрес компании:</Typography>
        <TextField
          placeholder="Address"
          fullWidth
          margin="normal"
          name="address"
          value={editInput.address}
          onChange={changeHandler}
        />
        <Button onClick={editHandler}>Сохранить</Button>
        <Button onClick={() => setOpen(false)}>Отменить</Button>
      </Box>
    </Modal>
  );
}
