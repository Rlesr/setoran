import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        {/* Add other navigation links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
