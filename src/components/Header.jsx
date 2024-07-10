import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div className="logo">Fontainebleau</div>
    <nav>
      <ul className="flex space-x-4">
        <li><Link to = "/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
