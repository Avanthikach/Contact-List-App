import React from 'react';

const Stats = ({ contacts }) => {
  const maleCount = contacts.filter(contact => contact.gender === 'male').length;
  const femaleCount = contacts.filter(contact => contact.gender === 'female').length;
  const personalCount = contacts.filter(contact => contact.type === 'personal').length;
  const businessCount = contacts.filter(contact => contact.type === 'business').length;

  return (
    <div className="stats">
      <h2>Statistics</h2>
      <p>Male Contacts: {maleCount}</p>
      <p>Female Contacts: {femaleCount}</p>
      <p>Personal Contacts: {personalCount}</p>
      <p>Business Contacts: {businessCount}</p>
    </div>
  );
};

export default Stats;
