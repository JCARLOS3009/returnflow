import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Return Center</h1>
      <p>Manage your product returns and exchanges efficiently.</p>
      <Link to="/return-requests">
      <button>Entrar no Sistema</button>
      </Link>
      
    </div>
  );
};

export default HomePage;
