import React from 'react';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Easter Egg</h2>
        <p>¡Bien por encontrarlo! Pero lamentablemente no hay nada aquí.</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
