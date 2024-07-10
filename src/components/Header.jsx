import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-6 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Fontainebleau</div>
      <nav>
        <ul className="flex space-x-6">
          <li className="text-white text-lg font-bold">Home</li>
          <li className="text-white text-lg font-bold">Gallery</li>
          <li className="text-white text-lg font-bold">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
