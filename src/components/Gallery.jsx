import React from 'react';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';

const Gallery = () => {
    const photos = [
        { 
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/03/8b/exterior.jpg?w=1200&h=-1&s=1', 
          title: 'Grandes Vistas', 
          description: 'Disfruta de unas vistas espectaculares desde nuestro hotel, con paisajes que te dejarán sin aliento.'
        },
        { 
          image: 'https://www.kayak.com.mx/news/wp-content/uploads/sites/29/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg', 
          title: 'Hotel 5 estrellas', 
          description: 'Experiencia de lujo en nuestro hotel de cinco estrellas, donde cada detalle está pensado para tu confort.'
        },
        { 
          image: 'https://content.r9cdn.net/himg/ca/92/12/ice-55339-73817713_3XL-651930.jpg', 
          title: 'Gran área de descanso', 
          description: 'Relájate en nuestra amplia área de descanso, perfecta para desconectar y recargar energías.'
        },
        { 
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/58/ee/65/go-quito-hotel.jpg?w=300&h=-1&s=1', 
          title: 'Cómodas habitaciones', 
          description: 'Nuestras habitaciones están diseñadas para ofrecerte la máxima comodidad y un descanso reparador.'
        },
        { 
          image: 'https://cdn.forbes.com.mx/2020/07/hoteles-Grand-Velas-Resorts-e1596047698604.jpg', 
          title: 'Vista al mar', 
          description: 'Despierta con la increíble vista al mar desde la comodidad de tu habitación en nuestro resort.'
        },
        { 
          image: 'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2020/10/65345792-h1-facb_angular_pool_view_300dpi.jpg?fit=2800%2C1867&ssl=1', 
          title: 'Gran vida nocturna', 
          description: 'Vive la vida nocturna vibrante y emocionante que nuestro hotel y sus alrededores tienen para ofrecer.'
        }
      ];
      

  return (
    <div>
        <Header/>
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold text-center mb-10">Galería de Fotos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <Card key={index} image={photo.image} title={photo.title} description={photo.description} />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Gallery;
