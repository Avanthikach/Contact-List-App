import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ name: '', type: 'personal', gender: 'male' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name) {
      addContact(contact);
      setContact({ name: '', type: 'personal', gender: 'male' });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
      />
      <select name="type" value={contact.type} onChange={handleChange}>
        <option value="personal">Personal</option>
        <option value="business">Business</option>
      </select>
      <select name="gender" value={contact.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
