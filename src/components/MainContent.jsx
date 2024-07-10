import Modal from "./Modal";
import Header from "./Header";
import Footer from "./Footer";
import MainImage from "../MainImage/Main.jpg";
import React, { useState } from "react";

const MainContent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-gray-100 py-10">
        <div className="bg-blue-300 p-5 rounded-lg flex w-full max-w-4x2">
          <div className="w-1/2">
            <img
              src={MainImage}
              alt="Hotel"
              className="object-cover h-full rounded-l-lg"
            />
          </div>
          <div className="w-1/2 p-6">
            <h1 className="text-2xl font-bold mb-4">Fontainebleau Miami</h1>
            <p className="text-lg mb-4">
              El Fontainebleau Miami Beach es un icónico hotel de lujo ubicado
              en el corazón de Miami Beach, Florida. Fundado en 1954, este
              resort es famoso por su distintiva arquitectura moderna de
              mediados de siglo diseñada por Morris Lapidus, que incluye curvas
              elegantes y espacios opulentos.
            </p>
            <h2 className="text-xl font-semibold mb-2">Ubicación</h2>
            <p className="text-lg mb-4">
              El Fontainebleau se sitúa en una amplia franja de playa frente al
              mar Atlántico, ofreciendo vistas panorámicas del océano y fácil
              acceso a la vibrante vida nocturna, restaurantes y tiendas de
              Miami Beach.
            </p>
            <h2 className="text-xl font-semibold mb-2">Alojamientos</h2>
            <p className="text-lg">
              El hotel cuenta con más de 1,500 habitaciones y suites, cada una
              decorada con un estilo contemporáneo y equipadas con comodidades
              modernas. Las habitaciones ofrecen vistas impresionantes al
              océano, la bahía o la ciudad.
            </p>

            <center>
              <button
                onClick={openModal}
                className="bg-blue-500 text-white px-4 py-2 rounded m-4"
              >
                ¡Reserva con nosotros!
              </button>
            </center>
          </div>
        </div>
        <Modal isVisible={isModalVisible} onClose={closeModal} />
      </div>
      <Footer />
    </div>
  );
};
export default MainContent;
