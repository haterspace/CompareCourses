import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { codeService } from '../../services/userService';
import { useNavigate } from 'react-router-dom';

export default function CodePage(): JSX.Element {
  const navigate = useNavigate();
  const [response, setResponse] = useState<{ status: number } | null>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const randomString = formData.get('randomString') as string;

    try {
      if (randomString) {
        const response = await codeService({ randomString });

        setResponse(response);
        if (response.status === 'code') {
          navigate('/');
        }
      }
    } catch (error) {
      // Обработка ошибок, если запрос не удался
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={submitHandler} style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Введите код
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="randomString"
          name="randomString"
          label="Код"
          autoFocus
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Отправить
        </Button>
      </form>
    </Container>
  );
}
