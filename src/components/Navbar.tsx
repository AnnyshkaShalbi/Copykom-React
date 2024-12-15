import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
    </nav>
  );
};

export default Navbar;