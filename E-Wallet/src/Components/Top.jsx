import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <header className="top-header">
      <Link to="/" className="home-link">E-Wallet</Link>
    </header>
  );
};

export default Top;
