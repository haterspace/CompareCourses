import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const defaultTheme = createTheme();

export default function Footer(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h6" align="center">
              Made by: Разработчики, которых нужно ещё поискать!
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
