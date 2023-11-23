import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './components/pages/AuthPage';
import NavBar from './components/ui/NavBar';
import AdminPage from './components/pages/AdminPage';
import PrivateRoute from './hocs/PrivateRoute';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkUserThunk } from './redux/slices/user/UserThunks';
import Loader from './hocs/Loader';
import HomePage from './components/pages/HomePage';
import LikedPage from './components/pages/LikedPage';
import MyCoursesPage from './components/pages/MyCoursesPage';
import Footer from './components/ui/Footer';
import OneCoursePage from './components/pages/OneCoursePage';
import AddCoursePage from './components/pages/AddCoursePage';
import CodePage from './components/pages/CodePage';
import CompanyProfile from './components/pages/CompanyProfile';
import CompanyPage from './components/pages/CompanyPage';
import UserProfile from './components/pages/UserProfile';

function App(): JSX.Element {
  const theme = createTheme({
    palette: {
      primary: { main: '#016A70' },
    },
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(checkUserThunk());
  }, []);

  const user = useAppSelector((store) => store.user);

  return (
    <ThemeProvider theme={theme}>
      <Loader isLoading={user.status === 'loading'}>
        <>
          <NavBar />
          <Box mt={5}>
            <Container maxWidth={false}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/adminPage"
                  element={
                    <PrivateRoute redirect="/" isAllowed={user.type === 'Admin'}>
                      <AdminPage />
                    </PrivateRoute>
                  }
                />
                <Route path="/like" element={<LikedPage />} />

                <Route element={<PrivateRoute redirect="/" isAllowed={user.type === 'Course'} />}>
                  <Route path="/addCourses" element={<AddCoursePage />} />
                  <Route path="/myCourses" element={<MyCoursesPage />} />
                </Route>

                <Route path="/courses/:id" element={<OneCoursePage />} />
                <Route path="/profile/:id" element={<CompanyProfile />} />
                <Route
                  path="/:auth"
                  element={
                    <PrivateRoute redirect="/" isAllowed={user.status === 'guest'}>
                      <AuthPage />
                    </PrivateRoute>
                  }
                />
                <Route path="/code" element={<CodePage />} />
                <Route path="/company/:id" element={<CompanyPage />} />
                <Route path="/userPage/:id" element={<UserProfile />} />
              </Routes>
            </Container>
          </Box>
          <Footer />
        </>
      </Loader>
    </ThemeProvider>
  );
}

export default App;
