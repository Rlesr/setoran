import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
