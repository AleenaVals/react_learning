import React, { useState } from 'react';

const DriverRegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
    const driverData = { name, email, phone };
    onRegister(driverData);
    setName('');
    setEmail('');
    setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Driver Registration</h2>
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

export default DriverRegistrationForm;
