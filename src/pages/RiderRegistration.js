import React, { useState } from 'react';

const RiderRegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
    const riderData = { name, email, phone };
    onRegister(riderData);
    setName('');
    setEmail('');
    setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Rider Registration</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RiderRegistrationForm;
