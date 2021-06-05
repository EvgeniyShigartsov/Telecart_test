import React, { FC, useEffect } from 'react';
import { ContactsList } from './components/ContactsList/ContactsList'
import { useActions } from './hooks/useActions';
import { Header } from './components/Header/Header'

const App: FC = () => {
  const { getContactsFromDB } = useActions()

  useEffect(() => {
    getContactsFromDB()
  }, [])
  return (
    <div className="app">
      <Header />
      <ContactsList />
    </div>
  );
}

export default App;
