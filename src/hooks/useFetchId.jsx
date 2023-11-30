// useApiData.js
import { useEffect, useState } from "react";

export const useFetchId = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Realiza la lógica para obtener datos de la API usando el id y actualiza el estado
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://190.113.124.155:9090/api/Parametro/${id}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return data;
};
