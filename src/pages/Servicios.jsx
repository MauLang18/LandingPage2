import "./style.css";
import React, { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import AlternateImageText from "../components/AlternateImageText";
import { useFetch } from "../hooks/useFetch";

const Servicios = () => {
  const { data, loading, error, setData } = useFetch(
    `https://localhost:7072/api/ServicioBeneficio`
  );

  /*const { data, loading, error, setData } = useFetch(
    `https://apiadmin.tranquiexpress.com/api/ServicioBeneficio`
  );*/

  const [signalRData, setSignalRData] = useState(null);

  useEffect(() => {
    if (data) {
      setSignalRData(data);
    }
  }, [data]);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7072/hub", {
        withCredentials: true,
      })
      .build();

    /*const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://apiadmin.tranquiexpress.com/hub", {
          withCredentials: true,
        })
        .build();*/

    connection.on("ServicioBeneficioRegistrado", (banner) => {
      setSignalRData((prevData) => {
        if (!prevData || !prevData.data || !prevData.data.items) {
          return { data: { items: [banner] } };
        }

        const updatedItems = [...prevData.data.items, banner];

        const updatedData = {
          ...prevData,
          data: {
            ...prevData.data,
            items: updatedItems,
          },
        };

        return updatedData;
      });
    });

    connection.on("ServicioBeneficioActualizado", (banner) => {
      setSignalRData((prevData) => {
        if (!prevData || !prevData.data) {
          return { data: { items: [] } };
        }

        const updatedItems = prevData.data.items.map((item) =>
          item.id === banner.id ? banner : item
        );

        const updatedData = {
          ...prevData,
          data: {
            ...prevData.data,
            items: updatedItems,
          },
        };

        return updatedData;
      });
    });

    connection.on("ServicioBeneficioEliminado", (id) => {
      setSignalRData((prevData) => {
        if (!prevData || !prevData.data) {
          return { data: { items: [] } };
        }

        const filteredItems = prevData.data.items.filter(
          (item) => item.id !== id
        );

        const updatedData = {
          ...prevData,
          data: {
            items: filteredItems,
          },
        };

        return updatedData;
      });
    });

    connection
      .start()
      .then(() => {
        console.log("Conexión establecida con éxito");
      })
      .catch((error) => {
        console.error("Error al iniciar la conexión:", error);
      });

    return () => {
      connection.stop();
    };
  }, []);

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
            {signalRData &&
              signalRData.data &&
              signalRData.data.items &&
              signalRData.data.items
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
