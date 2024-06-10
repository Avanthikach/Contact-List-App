import React from 'react';
import Contact from './contact';

const ContactList = ({ contacts, deleteContact, updateContact }) => {
  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} updateContact={updateContact} />
      ))}
    </div>
  );
};

export default ContactList;
