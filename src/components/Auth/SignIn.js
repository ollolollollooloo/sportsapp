import React from 'react';
import {UseFormInput} from '../../customhooks';
import {
    Paper,
    TextField,
    Button
} from '@material-ui/core'
import axios from 'axios'

export default function SignIn() {
    const username = UseFormInput('');
    const password = UseFormInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.value);
        console.log(password.value)
        let domain = "https://52a7kim1n2.execute-api.us-east-1.amazonaws.com/hackathon/v1/user"

        axios.post(domain+'/login?email='+username.value+'&password='+password.value, {})
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
        <div>
            <Paper style={{ width: 500, margin: '24px auto', padding: 24 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        {...username}
                        id="username"
                        label="Username"
                        margin="normal"
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
                    <Button variant="contained" color="primary" type="submit">
                        Signin
                    </Button>
                </form>
            </Paper>
        </div>
    )
}