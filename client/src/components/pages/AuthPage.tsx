import { Button, InputLabel, MenuItem, Select, TextField, Grid } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { SelectChangeEvent } from '@mui/material';
import type { UserLoginType, UserSignUpType } from '../../types/userTypes';
import { useAppDispatch } from '../../redux/hooks';
import { loginHandlerThunk, signUpHandlerThunk } from '../../redux/slices/user/UserThunks';

export default function AuthPage(): JSX.Element {
  const { auth } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      if (auth === 'signup') {
        void dispatch(signUpHandlerThunk(formData as UserSignUpType));
        navigate('/code');
      } else {
        void dispatch(loginHandlerThunk(formData as UserLoginType));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [type, setType] = React.useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    setType(event.target.value);
  };

  return (
    <Grid
      container
      rowSpacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      component="form"
      onSubmit={submitHandler}
    >
      {auth === 'signup' && (
        <Grid item>
          <TextField variant="outlined" name="username" label="username" />
        </Grid>
      )}
      <Grid item>
        <TextField variant="outlined" name="email" label="email" type="email" />
      </Grid>
      <Grid item>
        <TextField variant="outlined" name="password" label="password" type="password" />
      </Grid>
      {auth === 'signup' && (
        <Grid item>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="type"
            onChange={handleChange}
            name="type"
          >
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Course">Course</MenuItem>
          </Select>
        </Grid>
      )}
      {type === 'Course' && (
        <>
          <Grid item>
            <TextField
              style={{ width: '200px', margin: '5px' }}
              type="text"
              label="company name"
              variant="outlined"
              name="name"
            />
          </Grid>
          <Grid item>
            <TextField
              style={{ width: '200px', margin: '5px' }}
              type="description"
              label="description"
              variant="outlined"
              name="desc"
            />
          </Grid>
          <Grid item>
            <TextField
              style={{ width: '200px', margin: '5px' }}
              type="text"
              label="url"
              variant="outlined"
              name="url"
            />
          </Grid>
          <Grid item>
            <TextField
              style={{ width: '200px', margin: '5px' }}
              type="text"
              label="contacts"
              variant="outlined"
              name="contacts"
            />
          </Grid>
          <Grid item>
            <TextField
              style={{ width: '200px', margin: '5px' }}
              type="text"
              label="address"
              variant="outlined"
              name="address"
            />
          </Grid>
        </>
      )}
      <Grid item>
        <Button type="submit" variant="outlined" size="large">
          {auth === 'signup' ? 'Sign Up' : 'Login'}
        </Button>
      </Grid>
    </Grid>
  );
}

// ============ утро 15.10.2023 (до моего вмешательства) ==================

// import type { SelectChangeEvent } from '@mui/material';
// import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import type { UserLoginType, UserSignUpType } from '../../types/userTypes';
// import { useAppDispatch } from '../../redux/hooks';
// import { loginHandlerThunk, signUpHandlerThunk } from '../../redux/slices/user/UserThunks';

// export default function AuthPage(): JSX.Element {
//   const { auth } = useParams();
//   const dispatch = useAppDispatch();

//   const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
//     e.preventDefault();
//     const formData = Object.fromEntries(new FormData(e.currentTarget));
//     return auth === 'signup'
//       ? void dispatch(signUpHandlerThunk(formData as UserSignUpType))
//       : void dispatch(loginHandlerThunk(formData as UserLoginType));
//   };
//   const [type, setType] = React.useState('');

//   const handleChange = (event: SelectChangeEvent): void => {
//     setType(event.target.value);
//   };
//   return (
//     <Box
//       display="flex"
//       flexDirection="row"
//       alignItems="center"
//       component="form"
//       onSubmit={submitHandler}
//     >
//       {auth === 'signup' && <TextField variant="outlined" name="username" label="username" />}
//       <TextField variant="outlined" name="email" label="email" type="email" />
//       <TextField variant="outlined" name="password" label="password" type="password" />
//       {/* <FormControl fullWidth> */}
//       {auth === 'signup' && (
//         <>
//           <InputLabel id="demo-simple-select-label">Type</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={type}
//             label="type"
//             onChange={handleChange}
//             name="type"
//           >
//             <MenuItem value="User">User</MenuItem>
//             <MenuItem value="Course">Course</MenuItem>
//           </Select>
//         </>
//       )}
//       {/* </FormControl> */}
//       {type === 'Course' && (
//         <>
//           <TextField
//             style={{ width: '200px', margin: '5px' }}
//             type="text"
//             label="company name"
//             variant="outlined"
//             name="name"
//           />
//           <br />
//           <TextField
//             style={{ width: '200px', margin: '5px' }}
//             type="description"
//             label="description"
//             variant="outlined"
//             name="desc"
//           />
//           <br />
//           <TextField
//             style={{ width: '200px', margin: '5px' }}
//             type="text"
//             label="url"
//             variant="outlined"
//             name="url"
//           />
//           <br />
//         </>
//       )}
//       <Button type="submit" variant="outlined" size="large">
//         {auth === 'signup' ? 'Sign Up' : 'Login'}
//       </Button>
//     </Box>
//   );
// }
