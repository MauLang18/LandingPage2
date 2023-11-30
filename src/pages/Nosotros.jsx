import "./style.css";
import InfoPanel from "../components/InfoPanel";
import SectionData from "../components/SectionData";

const Nosotros = () => {
  const imageData = {
    imageSrc: "nosotros.png",
  };

  const sectionData = {
    titles: ["Misión", "Visión", "Valores"],
    contents: [
      "Ser líderes y considerados como la mejor opción en el sector de entregas express a nivel nacional, rompiendo tiempo récord de entregas y brindando un servicio de calidad que sea eficiente, productivo, seguro e innovador el cual tenga como resultado optimizar los recursos de nuestros clientes, ofreciéndoles el mayor valor por un mismo monto.",
      "Convertirnos en una empresa que pueda crear alto valor y confiabilidad para la sociedad a largo plazo. Permita que tanto nuestros clientes de envío como de recepción sientan que la entrega de paquetes está a un solo clic de distancia y seguro.",
      "Centrarse en las necesidades del cliente, basado en la integridad, trabajo en equipo y apasionado, aprendizaje y mejora continua e innovación.",
    ],
  };
  return (
    <section id="nosotros" className="xl:mt-20 mt-[-450px]">
      <div className="white p-8 flex flex-col items-center justify-center gap-8 mt-[500px] xl:mt-0">
        <SectionData {...imageData} {...sectionData} imageFirst={true} />
      </div>
    </section>
  );
};

export default Nosotros;
