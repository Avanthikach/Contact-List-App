import React, { useState } from 'react';
import ContactList from './components/contactlist';
import ContactForm from './components/contactform';
import Stats from './components/stats';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', type: 'business', gender: 'male' },
    { id: 2, name: 'Jane Smith', type: 'personal', gender: 'female' }
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <Stats contacts={contacts} />
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} updateContact={updateContact} />
    </div>
  );
};

export default App;
