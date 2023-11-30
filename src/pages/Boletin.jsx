import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import Modal from "../components/Modal";
import { useModal } from "../hooks/useModal";
import CustomCard from "../components/CustomCard2";
import { useFetch } from "../hooks/useFetch";

const Boletin = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  const { data, loading, error } = useFetch(
    `http://190.113.124.155:9090/api/Boletin`
  );

  const handleOpenModal = () => {
    if (data && data.data.items.some((item) => item.estado === 1)) {
      openModal1();
    }
  };

  return (
    <section id="boletin">
      <div className="w-full relative mx-auto mt-28">
        <div
          className="text-center text-orange-400 text-3xl font-bold relative top-0 left-1/2 transform -translate-x-1/2"
          style={{ fontFamily: "'fuente', sans-serif" }}
        >
          Boletín Informativo
        </div>
        <CustomCard
          img={false}
          buttonText={"Leer más"}
          buttonLink={handleOpenModal}
          title={`Nuestro boletín informativo contiene información importante <br/> sobre eventos que podrían afectar nuestro servicio regular.`}
        />
      </div>{" "}
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && data.data.items && (
          <ul>
            {data.data.items
              .filter((item) => item.estado === 1)
              .slice(0, 1) // Tomar solo el primer elemento después del filtro
              .map((item) => (
                <li key={item.id}>
                  <img src={item.imagen} alt={item.nombre} />
                </li>
              ))}
          </ul>
        )}
      </Modal>
    </section>
  );
};

export default Boletin;
