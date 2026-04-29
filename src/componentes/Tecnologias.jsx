import html from "../assets/tecnologias/html.png";
import css from "../assets/tecnologias/css2.png";
import js from "../assets/tecnologias/javascript.png";
import react from "../assets/tecnologias/react.png";
import tailwind from "../assets/tecnologias/tailwind.png";
import bootstrap from "../assets/tecnologias/bootstrap.png";
import rn from "../assets/tecnologias/react-native.png";
import next from "../assets/tecnologias/Next2.png";

import node from "../assets/tecnologias/node.png";
import express from "../assets/tecnologias/express.png";
import banco from "../assets/tecnologias/banco-de-dados.png";

export default function Tecnologias() {
  const techs = [
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    rn,
    next,
    node,
    express,
    banco,
  ];

  return (
    <div className="overflow-hidden w-full p-1 md:p-4 bg-gray-600 mb-5">
      <div className="flex gap-10 animate-slide whitespace-nowrap">
        {/* duplicação para loop infinito */}
        {[...techs, ...techs].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="tecnologia"
            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition flex shrink-0"
          />
        ))}
      </div>
    </div>
  );
}