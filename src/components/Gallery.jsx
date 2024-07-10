import React from 'react';
import Card from './Card';

const Gallery = () => {
  const photos = [
    { image: 'url_de_tu_imagen_1.jpg', title: 'Título 1', description: 'Descripción breve de la imagen 1.' },
    { image: 'url_de_tu_imagen_2.jpg', title: 'Título 2', description: 'Descripción breve de la imagen 2.' },
    { image: 'url_de_tu_imagen_3.jpg', title: 'Título 3', description: 'Descripción breve de la imagen 3.' },
    // Añade más fotos según sea necesario
  ];

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold text-center mb-10">Galería de Fotos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <Card key={index} image={photo.image} title={photo.title} description={photo.description} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
