import React from 'react';

const PhotoCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={description} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
