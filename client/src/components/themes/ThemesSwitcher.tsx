import React, { useState } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import { Switch } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function ThemeSwitcher (): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme: Theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Switch checked={darkMode} onChange={handleThemeChange} />
    </ThemeProvider>
  );
};

export default ThemeSwitcher;