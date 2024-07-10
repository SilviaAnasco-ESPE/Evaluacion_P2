import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div className="logo">Logo</div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
