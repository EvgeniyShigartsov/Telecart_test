import React, { FC } from 'react';
import { ContactsList } from './components/ContactsList/ContactsList'

const App: FC = () => (
  <div className="app">
    <h1>Hello world</h1>
    <ContactsList />
  </div>
);

export default App;
