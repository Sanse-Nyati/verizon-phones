import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 import this

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // 👈 hook to navigate programmatically

  const handleLogin = () => {
    if (password === 'Andrew10951') {
      navigate('/addproducts'); // 👈 redirect to AddProducts page
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
