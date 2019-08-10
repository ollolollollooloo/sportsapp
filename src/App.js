import React from 'react';
import { UserProvider } from './context/UserContext';
import UsesList from './components/UsersList';
import Main from './components/Main';

function App() {
  return (
  	<div>
  		<Main />
	    <UserProvider>
	      <UsesList />
	    </UserProvider>
  	</div>
  );
}

export default App;
