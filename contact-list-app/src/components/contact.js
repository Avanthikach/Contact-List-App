import React, { useState } from 'react';

const Contact = ({ contact, deleteContact, updateContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact({ ...updatedContact, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateContact(updatedContact);
    setIsEditing(false);
  };

  return (
    <div className="contact">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="name"
            value={updatedContact.name}
            onChange={handleEditChange}
          />
          <select name="type" value={updatedContact.type} onChange={handleEditChange}>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
          <select name="gender" value={updatedContact.gender} onChange={handleEditChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit">Update</button>
        </form>
      ) : (
        <div>
          <span>{contact.name} - {contact.type} - {contact.gender}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Contact;
