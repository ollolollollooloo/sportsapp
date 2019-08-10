import React from 'react';
import {
  UseFormInput
} from '../../customhooks';
import {
  Paper,
  TextField,
  Button,
  MenuItem,
  //LinearProgress
} from '@material-ui/core';
import axios from 'axios'

export default function SignUp() {
  const firstname = UseFormInput('');
  const lastname = UseFormInput('');
  const password = UseFormInput('');
  const email = UseFormInput('');
  const gender = UseFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //eg.firstname.value

    let domain = "https://52a7kim1n2.execute-api.us-east-1.amazonaws.com/hackathon/v1/user"

    axios.post(domain+'/register?first_name='+firstname.value+'&last_name='+lastname.value+'&email='+email.value+'&gender='+gender.value+'&password='+password.value, {})
    .then(function (response) {
      localStorage.setItem("sportsapp-token", response.data.token)
      localStorage.setItem("auth-refresh-token", response.data.refreshToken)
      window.location.replace("/dashboard")
      console.log(response.data)
    }).catch(function (error) {
      console.log(error.response)
    })
  }

  return (
    <div style={{ width: 500, margin: '24px auto' }}>
      <Paper style={{ padding: 24 }} square>
        <h1>Sports App</h1>
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
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>

          <br /><br />
          <Button variant="contained" color="primary" type="submit">
            Signup
          </Button>
        </form>
      </Paper>
      {/* {!register.data || register.isLoading ? <LinearProgress /> : null} */}
    </div>
  )
}