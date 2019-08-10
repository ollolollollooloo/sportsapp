import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';

export default function UsersList() {
// eslint-disable-next-line
    const [users, setUsers] = useContext(UserContext);
  return (
    <div>
        {users.map(user => (
            <h1>{user.name}</h1>
        ))}
    </div>
  );
}