import React from 'react';
import UseFormInput from '../../customhooks/UseFormInput';
import {
  Paper,
  TextField,
  Button,
  MenuItem
} from '@material-ui/core';

export default function SignUp() {
  const firstname = UseFormInput('');
  const lastname = UseFormInput('');
  const password = UseFormInput('');
  const email = UseFormInput('');
  const gender = UseFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //eg.firstname.value
  }

  return (
    <div>
      <Paper style={{ width: 500, margin: '24px auto', padding: 24 }}>
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
          <Button variant="contained" color="primary" type="submit">
            Signup
                    </Button>
        </form>
      </Paper>
    </div>
  )
}