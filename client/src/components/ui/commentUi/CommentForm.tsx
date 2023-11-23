import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import type { CommentFormType } from '../../../types/CommentTypes';
import { addCommentThunk } from '../../../redux/slices/comments/CommentsThunks';

function CommentForm(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState<CommentFormType>({ body: '' });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        className="inputotziv"
        name="body"
        variant="outlined"
        margin="normal"
        type="text"
        placeholder="ваш отзыв"
        value={inputs.body}
        onChange={changeHandler}
      />
      <Box mt={2}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            void dispatch(addCommentThunk({ id: Number(id), formData: inputs }));
            setInputs({ body: '' });
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default CommentForm;
