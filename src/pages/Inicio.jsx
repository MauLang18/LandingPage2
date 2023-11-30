import "react-responsive-carousel/lib/styles/carousel.min.css";
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

  const { data, loading, error } = useFetch(
    `http://190.113.124.155:9090/api/BannerPrincipal`
  );

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
        {data &&
          data.data.items &&
          data.data.items
            .filter((item) => item.estado === 1)
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
        {<Accesos modal={() => openModal()} modal1={() => openModal1()} />}
      </div>
      <Modal2 isOpen={isOpenModal} closeModal={closeModal}>
        {/* <ProgramarRecoleccionForm closeModal={() => closeModal()} /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            src="programar_recoleccion.png"
            alt="Imagen"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </Modal2>
      <Modal2 isOpen={isOpenModal1} closeModal={closeModal1}>
        {/* <Tarifas1 /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            src="tarifas_rutas.png"
            alt="Imagen"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </Modal2>
    </section>
  );
};

export default Inicio;
