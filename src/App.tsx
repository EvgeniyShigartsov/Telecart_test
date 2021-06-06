import React, { FC, useEffect } from 'react';
import { ContactsList } from './components/ContactsList/ContactsList'
import { useActions } from './hooks/useActions';
import { Header } from './components/Header/Header'
import { Modal } from './components/Modal/Modal'

const App: FC = () => {
  const { getContacts } = useActions()

  useEffect(() => {
    getContacts()
  }, [])
  return (
    <div className="app">
      <Header />
      <ContactsList />
      <Modal />
    </div>
  );
}

export default App;
