import React, { useState } from 'react';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    console.log('Username:', userName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="form-container">
      <form>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleInputChange}
            autoComplete="username" // Add the autocomplete attribute
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="email" // Add the autocomplete attribute
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            autoComplete="current-password" // Add the autocomplete attribute
          />
        </div>
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;