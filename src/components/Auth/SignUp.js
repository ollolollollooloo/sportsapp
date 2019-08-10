import React from 'react';
import {
  UseFormInput,
  UseFetchApi
} from '../../customhooks';
import {
  Paper,
  TextField,
  Button,
  MenuItem,
  LinearProgress
} from '@material-ui/core';

export default function SignUp() {
  const URL = "https://jsonplaceholder.typicode.com/todos/1";
  const register = UseFetchApi({ isLoading: true, data: null });

  const firstname = UseFormInput('');
  const lastname = UseFormInput('');
  const password = UseFormInput('');
  const email = UseFormInput('');
  const gender = UseFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{ width: 500, margin: '24px auto' }}>
      <Paper style={{ padding: 24 }} square>
        <form onSubmit={handleSubmit}>
          <TextField
            {...firstname}
            id="firstname"
            label="Firstname"
            margin="normal"
            fullWidth
          />
          <TextField
            {...lastname}
            id="lastname"
            label="Lastname"
            margin="normal"
            fullWidth
          />
          <TextField
            {...email}
            id="email"
            label="Email"
            margin="normal"
            type="email"
            fullWidth
          />
          <TextField
            {...password}
            id="password"
            label="Password"
            margin="normal"
            type="password"
            fullWidth
          />
          <TextField
            {...gender}
            id="standard-select-currency"
            select
            label="Gender"
            margin="normal"
            fullWidth
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>

          <br /><br />
          <Button variant="contained" color="primary" type="submit" disabled={!register.data || register.isLoading}>
            Signup
          </Button>
        </form>
      </Paper>
      {!register.data || register.isLoading ? <LinearProgress /> : null}
    </div>
  )
}