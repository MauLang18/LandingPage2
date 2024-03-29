import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";

const useFetchIdAndUpdateSignalR = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://apiadmin.tranquiexpress.com:8443/Parametro/${id}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://apiadmin.tranquiexpress.com:8443/hub", {
        withCredentials: true,
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

    connection
      .start()
      .then(() => {
        console.log("Conexión establecida con éxito");
      })
      .catch((error) => {
        console.error("Error al iniciar la conexión:", error);
      });

      connection.on("PublishCore", (updatedData) => {
        // Muestra la propiedad 'Dirigido' del objeto
        const item = JSON.parse(updatedData);
  
        const isEmpresaIdValid = item.EmpresaId === 2;
        const isDirigidoValid = item.Dirigido === "parametroActualizado";
        const isIdValid = item.Id === id;
      
        if (isEmpresaIdValid && isDirigidoValid && isIdValid) {
          setData(item);
        }
      });

    return () => {
      connection.stop();
    };
  }, [id]);

  return data;
};

export default useFetchIdAndUpdateSignalR;
