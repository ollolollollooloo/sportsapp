import React from 'react';
import { UserProvider } from './context/UserContext';
import UsesList from './components/UsersList';

function App() {
  return (
    <UserProvider>
      <UsesList />
    </UserProvider>
  );
}

export default App;
