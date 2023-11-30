import "./style.css";
import React from "react";
import AlternateImageText from "../components/AlternateImageText";
import { useFetch } from "../hooks/useFetch";

const Servicios = () => {
  const { data, loading, error } = useFetch(
    `http://190.113.124.155:9090/api/ServicioBeneficio`
  );

  return (
    <section id="servicios" className="mt-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-center text-3xl font-extrabold text-orange-400 mt-10"
            style={{ fontFamily: "'fuente', sans-serif" }}
          >
            Servicios y beneficios
          </h1>
          <div className="mt-10 grid grid-cols-1 gap-10">
            {data &&
              data.data.items &&
              data.data.items
                .filter((item) => item.estado === 1)
                .map((item, index) => (
                  <AlternateImageText
                    key={item.id}
                    imageSrc={item.imagen}
                    title={item.titulo}
                    content={item.descripcion}
                    imageFirst={index % 2 === 0}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
