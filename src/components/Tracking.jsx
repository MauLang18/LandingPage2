import { useState } from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useFetchId } from "../hooks/useFetchId";

const Tracking = ({ clases }) => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const RASTREO = useFetchId(12)?.data?.valor || "";

  const handleSearch = () => {
    if (trackingNumber) {
      window.open(`${RASTREO}/${trackingNumber}`, "_blank");
    } else {
      alert("Tiene que agregar un número de rastreo");
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-white text-[25px] font-bold text-center md:text-left ${clases}`}
    >
      <div
        className="md:text-left text-white text-[25px] font-bold text-center md:ml-[-465px]"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Rastrear envío:
      </div>
      <div className="md:flex md:items-center md:space-x-4">
        <input
          type="text"
          placeholder="Inserte el número de rastreo"
          className="w-full md:w-[470px] h-[59px] bg-white rounded-[10px] mt-4 md:mt-0 text-center text-neutral-500 text-[15px] md:text-xl font-normal placeholder-gray-500"
          style={{ fontFamily: "'fuente', sans-serif" }}
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button
          className="w-full md:w-[159px] h-[59px] bg-neutral-700 rounded-[10px] mt-4 md:mt-0 text-center text-white text-lg md:text-xl font-bold relative"
          style={{ fontFamily: "'fuente', sans-serif" }}
          onClick={handleSearch}
        >
          <AiOutlineSearch
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-xl md:text-2xl"
            style={{ pointerEvents: "none" }}
          />
          Rastrear
        </button>
      </div>
    </div>
  );
};

export default Tracking;
