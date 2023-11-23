import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as NavLink, useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutHandlerThunk } from '../../redux/slices/user/UserThunks';
const linkStyle = { color: 'white', mr: 2 };

export default function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const company = useAppSelector((store) => store.company.companies);

  const links =
    user.status === 'logged'
      ? [
          { to: '/', name: 'Главная' },
          { to: '/like', name: 'Сравнения' },
        ]
      : [
          { to: '/', name: 'Главная' },
          { to: '/signup', name: 'Регистрация' },
          { to: '/login', name: 'Авторизация' },
        ];

  if (user.type === 'Admin') {
    links.push({ to: '/adminPage', name: 'Админская панель' });
  }

  if (user.type === 'Course') {
    links.push({ to: '/myCourses', name: 'Мои курсы' });
    links.push({ to: '/addCourses', name: 'Добавить курс' });
    links.push({ to: `/profile/${user.id}`, name: 'Личный кабинет' });
    console.log(company);
  }
  if (user.type === 'User') {
    links.push({ to: `/userPage/${user.id}`, name: 'Личный кабинет' });
  }
  console.log(user);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, typography: 'body1' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Привет, {user.status === 'logged' ? user.username : 'друг'}
          </Typography>
          {links.map((link) => (
            <Link component={NavLink} key={link.name} to={link.to} sx={linkStyle}>
              {link.name}
            </Link>
          ))}
          {user.status === 'logged' && (
            <Button
              color="inherit"
              onClick={() => {
                void dispatch(logoutHandlerThunk()), navigate('/signup');
              }}
            >
              Выйти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
