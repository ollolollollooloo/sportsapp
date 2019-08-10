import React from 'react';
import UseFormInput from '../../customhooks/UseFormInput';
import {
    Paper,
    TextField,
    Button
} from '@material-ui/core';

export default function SignUp() {
    const firstname = UseFormInput('');
    const lastname = UseFormInput('');

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
                    <Button variant="contained" color="primary" type="submit">
                        Signup
                    </Button>
                </form>
            </Paper>
        </div>
    )
}