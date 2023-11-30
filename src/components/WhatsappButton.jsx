import React, { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { useFetchId } from "../hooks/useFetchId";

const WhatsAppButton = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });

  const WHATSAPP = useFetchId(4)?.data?.valor || "";

  const startDrag = (event) => {
    setIsDragging(true);

    const offsetX = event.clientX - position.x;
    const offsetY = event.clientY - position.y;

    const onMouseMove = (event) => {
      if (!isDragging) return;

      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;

      setPosition({ x, y });
    };

    const stopDrag = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", stopDrag);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 transition-transform transform hover:scale-105 ${
        isDragging ? "z-50" : "z-10"
      }`}
    >
      <div
        className="bg-green-500 p-4 rounded-full cursor-pointer"
        onMouseDown={startDrag}
      >
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiWhatsappFill className="text-white text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
