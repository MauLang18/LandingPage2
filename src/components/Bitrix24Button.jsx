import React, { useEffect, useState } from "react";
import useFetchIdAndUpdateSignalR from "../hooks/useFetchIdAndUpdateSignalR";

const Bitrix24Button = () => {
  const [buttonLoaded, setButtonLoaded] = useState(false);

  const CHAT = useFetchIdAndUpdateSignalR(31) || {};

  const extractValue = (data) => {
    if (data && data.data && data.data.valor) {
      return data.data.valor;
    } else if (data && data.Valor) {
      return data.Valor;
    } else {
      return "";
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${extractValue(CHAT)}?` + (Date.now() / 60000 | 0);
    script.async = true;

    script.onload = () => {
      setButtonLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!buttonLoaded) {
    return <div>Cargando botón...</div>;
  }

  return null; 
};

export default Bitrix24Button;
