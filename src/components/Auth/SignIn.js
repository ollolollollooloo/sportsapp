import React from 'react';
import {UseFormInput} from '../../customhooks';
import {
    Paper,
    TextField,
    Button
} from '@material-ui/core';

export default function SignIn() {
    const username = UseFormInput('');
    const password = UseFormInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.value);
        console.log(password.value);
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