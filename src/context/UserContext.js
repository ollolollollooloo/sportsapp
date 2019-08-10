import React, { useState, createContext } from 'react';

// eslint-disable-next-line
export const UserContext = createContext();

export const UserProvider = props => {
    // eslint-disable-next-line
    const [users, setUsers] = useState([
        {
            name: 'John Doe',
            email: 'johndoe@gmail.com'
        },
        {
            name: 'John Doe 2',
            email: 'johndoe2@gmail.com'
        }
    ]);

    return (
        <UserContext.Provider value={[users, setUsers]}>{props.children}</UserContext.Provider>
    )
}