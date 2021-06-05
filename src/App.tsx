import React, { FC, useEffect } from 'react';
import { ContactsList } from './components/ContactsList/ContactsList'
import { useActions } from './hooks/useActions';

const App: FC = () => {
  const { getContactsFromDB } = useActions()

  useEffect(() => {
    getContactsFromDB()
  }, [])
  return (
    <div className="app">
      <h1>Hello world</h1>
      <ContactsList />
    </div>
  );
}

export default App;
