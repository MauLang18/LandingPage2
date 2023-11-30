import React from "react";
import { RiInstagramLine, RiYoutubeLine } from "react-icons/ri";
import { AiFillLinkedin, AiOutlineFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { useFetchId } from "../hooks/useFetchId";

const SocialLinks = ({ textColor, textSize }) => {
  const INSTAGRAM = useFetchId(5)?.data?.valor || "";
  const FACEBOOK = useFetchId(6)?.data?.valor || "";
  const YOUTUBE = useFetchId(7)?.data?.valor || "";
  const LINKEDIN = useFetchId(8)?.data?.valor || "";
  const TIKTOK = useFetchId(9)?.data?.valor || "";

  return (
    <div className="w-full text-center justify-center items-center mx-auto">
      <p
        className={`text-${textColor} text-${textSize} font-medium mb-2`}
        style={{ fontFamily: "'fuente', sans-serif" }}
      >
        Seguinos en redes
      </p>
      <nav
        className={`flex items-center justify-center md:justify-center md:mr-10 gap-2 md:gap-4 text-${textColor} md:ml-[52px]`}
      >
        <a
          href={INSTAGRAM}
          target="_blank"
          className={`block p-1 text-${textSize}`}
        >
          <RiInstagramLine />
        </a>
        <a
          href={FACEBOOK}
          target="_blank"
          className={`block p-1 text-${textSize}`}
        >
          <AiOutlineFacebook />
        </a>
        <a
          href={YOUTUBE}
          target="_blank"
          className={`block p-1 text-${textSize}`}
        >
          <RiYoutubeLine />
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          className={`block p-1 text-${textSize}`}
        >
          <AiFillLinkedin />
        </a>
        <a
          href={TIKTOK}
          target="_blank"
          className={`block p-1 text-${textSize}`}
        >
          <FaTiktok />
        </a>
      </nav>
    </div>
  );
};

export default SocialLinks;
