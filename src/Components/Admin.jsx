import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'admin123') {
      onLogin();
    } else {
      setError('Incorrect password!');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Admin Login</h3>
      <input
        type="password"
        className="form-control my-3"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
