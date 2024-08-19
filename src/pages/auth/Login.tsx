import React from 'react';
import { useAuth } from './auth';

const Login: React.FC = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    // Perform login logic
    login('username'); // This sets the user in context
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
