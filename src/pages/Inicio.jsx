import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { Carousel } from "react-responsive-carousel";
import Tracking from "../components/Tracking";
import Accesos from "../components/Accesos";
import { useModal } from "../hooks/useModal";
import Modal2 from "../components/Modal2";
import ProgramarRecoleccionForm from "../components/ProgramarRecoleccionForm";
import Tarifas1 from "../components/Tarifas1";
import { useFetch } from "../hooks/useFetch";

const Inicio = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const isMobile = window.innerWidth <= 768;

  const { data } = useFetch(
    `https://apiadmin.tranquiexpress.com:8443/BannerPrincipal?empresa=2`
  );

  const [signalRData, setSignalRData] = useState(null);

  useEffect(() => {
    if (data) {
      setSignalRData(data);
    }
  }, [data]);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://apiadmin.tranquiexpress.com:8443/hub", {
        withCredentials: true,
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

    connection.on("BannerRegistrado", (banner) => {
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

    connection.on("BannerActualizado", (banner) => {
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

    connection.on("BannerEliminado", (id) => {
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

    const startConnections = async () => {
      try {
        await connection.start();
        console.log("Conexión establecida con éxito");
      } catch (error) {
        console.error("Error al iniciar la conexión:", error);
      }
    };

    startConnections();

    return () => {
      connection.stop();
    };
  }, []);

  return (
    <section id="home" className="relative">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        className={`h-${isMobile ? "96" : "500"} lg:w-auto`}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        emulateTouch={true}
        dynamicHeight={false}
      >
        {signalRData &&
          signalRData.data &&
          signalRData.data.items &&
          signalRData.data.items
            .filter((item) => item.estado === 1 && item.empresaId === 2)
            .map((item) => (
              <div key={item.id}>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="h-[430px]"
                />
              </div>
            ))}
      </Carousel>

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-20"
        style={{ zIndex: 20 }}
      >
        <Tracking clases={"mt-[-500px] md:mt-[-150px]"} />
        <Accesos
          clases={"hidden md:grid"}
          modal={() => openModal()}
          modal1={() => openModal1()}
        />
      </div>

      <div className="md:hidden mt-[250px] text-center">
        <Accesos modal={() => openModal()} modal1={() => openModal1()} />
      </div>

      <Modal2 isOpen={isOpenModal} closeModal={closeModal}>
        <ProgramarRecoleccionForm closeModal={() => closeModal()} />
      </Modal2>

      <Modal2 isOpen={isOpenModal1} closeModal={closeModal1}>
        <Tarifas1 />
      </Modal2>
    </section>
  );
};

export default Inicio;
