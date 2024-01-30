import React from "react";
import "./style.css";
import CustomCard from "../components/CustomCard";
import useFetchIdAndUpdateSignalR from "../hooks/useFetchIdAndUpdateSignalR";

const Mas = () => {
  const TUTORIAL = useFetchIdAndUpdateSignalR(10) || {};
  const REGISTRO = useFetchIdAndUpdateSignalR(14) || {};

  const extractValue = (data) => {
    if (data && data.data && data.data.valor) {
      return data.data.valor;
    } else if (data && data.Valor) {
      return data.Valor;
    } else {
      return "";
    }
  };

  return (
    <div className="lg:w-[950px] lg:h-[548px] w-full relative mx-auto">
      <div
        className="text-center text-orange-400 text-3xl font-bold mt-4"
        style={{ fontFamily: "'fuente', sans-serif" }}
      >
        Más de Tranqui Express
      </div>
      <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 justify-center">
        <CustomCard
          img={true}
          imageSrc={"sos-nuevo.png"}
          buttonText={"Ver tutorial"}
          buttonLink={extractValue(TUTORIAL)}
          title="¿Sos nuevo en Tranqui Express?"
        />
        <CustomCard
          img={true}
          imageSrc={"cuenta.png"}
          buttonText={"Registrarse"}
          buttonLink={extractValue(REGISTRO)}
          title="¿Aún no tenés una cuenta?"
        />
      </div>
    </div>
  );
};

export default Mas;
