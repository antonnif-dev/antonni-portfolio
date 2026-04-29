import { useState } from "react";

/* ================= HTML & CSS ================= */
import html1 from "../assets/certificados/html-css/Curso Bootstrap 5_ novos recursos e práticas recomendadas de HTML, CSS e JavaScript.png";
import html2 from "../assets/certificados/html-css/Curso Bootstrap5_ crie uma landing page responsiva.png";
import html3 from "../assets/certificados/html-css/Curso CSS_ construindo layouts responsivos com grid.png";
import html4 from "../assets/certificados/html-css/Curso CSS_ Flexbox e layouts responsivos.png";
import html5 from "../assets/certificados/html-css/Curso HTML e CSS_ ambientes de desenvolvimento, estrutura de arquivos e tags.png";
import html6 from "../assets/certificados/html-css/Curso HTML e CSS_ cabeçalho, footer e variáveis CSS.png";
import html7 from "../assets/certificados/html-css/Curso HTML e CSS_ Classes, posicionamento e Flexbox.png";
import html8 from "../assets/certificados/html-css/Curso HTML e CSS_ praticando HTML_CSS.png";
import html9 from "../assets/certificados/html-css/Curso HTML e CSS_ responsividade com mobile-first.png";
import html10 from "../assets/certificados/html-css/Curso HTML e CSS_ trabalhando com responsividade e publicação de projetos.png";
import html11 from "../assets/certificados/html-css/Curso Praticando CSS_ Grid e Flexbox.png";
import html12 from "../assets/certificados/html-css/Curso Tailwind CSS_ estilizando a sua página com classes utilitárias.png";

/* ================= JAVASCRIPT ================= */
import js1 from "../assets/certificados/javascript/Curso JavaScript para Web_ Crie páginas dinâmicas.png";
import js2 from "../assets/certificados/javascript/Curso JavaScript_ construindo páginas dinâmicas.png";
import js3 from "../assets/certificados/javascript/Curso JavaScript_ consumindo e tratando dados de uma API.png";
import js4 from "../assets/certificados/javascript/Curso JavaScript_ explorando a linguagem.png";
import js5 from "../assets/certificados/javascript/Curso JavaScript_ explorando a manipulação de elementos e da localStorage.png";
import js6 from "../assets/certificados/javascript/Curso JavaScript_ manipulando elementos no DOM.png";
import js7 from "../assets/certificados/javascript/Curso JavaScript_ métodos de array.png";
import js8 from "../assets/certificados/javascript/Curso JavaScript_ programando a Orientação a Objetos.png";
import js9 from "../assets/certificados/javascript/Curso Node.js e terminal_ dominando o ambiente de desenvolvimento front-end.png";
import js10 from "../assets/certificados/javascript/Curso JavaScript_ entendendo promises e async_await.png";
import js11 from "../assets/certificados/javascript/Curso JavaScript_ evoluindo a sua aplicação com ES6+.png";
import js12 from "../assets/certificados/javascript/Curso JavaScript_ implementando CRUD com requisições HTTP.png";

/* ================== React ================== */
import react1 from "../assets/certificados/react/Curso React_ desenvolvendo com JavaScript.png";
import react2 from "../assets/certificados/react/Curso React_ desenvolvendo em React Router com JavaScript.png";
import react3 from "../assets/certificados/react/Curso React com TailwindCSS_ estilizando componentes.png";
import react4 from "../assets/certificados/react/Curso React_ como os componentes funcionam.png";
import react5 from "../assets/certificados/react/Curso React_ Function Components, uma abordagem moderna.png";
import react6 from "../assets/certificados/react/Curso React_ estilize componentes com Styled Components e manipule arquivos estáticos.png";
import react7 from "../assets/certificados/react/Curso React_ gerencie estados globalmente com Context API.png";
import react8 from "../assets/certificados/react/Curso React_ praticando React com Js.png";
import react9 from "../assets/certificados/react/Curso React Native_ desenvolvendo com Expo.png";

/* ================= BACKEND ================= */
import back1 from "../assets/certificados/backend/Curso Git e GitHub_ compartilhando e colaborando em projetos.png";
import back2 from "../assets/certificados/backend/Curso Lógica de programação_ explore funções e listas.png";
import back3 from "../assets/certificados/backend/Curso Lógica de programação_ mergulhe em programação com JavaScript.png";
import back4 from "../assets/certificados/backend/Curso Node.js_ criando uma API Rest com Express e MongoDB.png";

/* ================= DATA ================= */
const certificados = {
  "html-css": [
    { title: "Bootstrap 5 - práticas recomendadas", img: html1 },
    { title: "Bootstrap 5 - landing page responsiva", img: html2 },
    { title: "CSS Grid", img: html3 },
    { title: "CSS Flexbox", img: html4 },
    { title: "HTML e CSS - estrutura", img: html5 },
    { title: "HTML e CSS - header/footer", img: html6 },
    { title: "HTML e CSS - posicionamento", img: html7 },
    { title: "HTML e CSS - prática", img: html8 },
    { title: "HTML e CSS - mobile-first", img: html9 },
    { title: "HTML e CSS - responsividade", img: html10 },
    { title: "CSS Grid e Flexbox", img: html11 },
    { title: "Tailwind CSS", img: html12 },
  ],

  javascript: [
    { title: "JS Web dinâmico", img: js1 },
    { title: "JS páginas dinâmicas", img: js2 },
    { title: "JS APIs", img: js3 },
    { title: "JS linguagem", img: js4 },
    { title: "JS localStorage", img: js5 },
    { title: "JS DOM", img: js6 },
    { title: "JS arrays", img: js7 },
    { title: "JS OOP", img: js8 },
    { title: "Node + terminal", img: js9 },
    { title: "Promises + Async await", img: js10 },
    { title: "Js Evoluindo com ES6+", img: js11 },
    { title: "Crud com requisições http", img: js12 },
  ],

  backend: [
    { title: "Git e GitHub", img: back1 },
    { title: "Lógica - funções", img: back2 },
    { title: "Lógica JS", img: back3 },
    { title: "Node API REST", img: back4 },
  ],

  react: [
  { title: "React com Javascript", img: react1 },
  { title: "React Router", img: react2 },
  { title: "React com Tailwind", img: react3 },
  { title: "React Componentes", img: react4 },
  { title: "Function Components", img: react5 },
  { title: "Style Components", img: react6 },
  { title: "Context API", img: react7 },
  { title: "Praticando React com Js", img: react8 },
  { title: "React Native", img: react9 },
  ]
};

const tabs = [
  { key: "html-css", label: "HTML & CSS" },
  { key: "javascript", label: "JavaScript" },
  { key: "react", label: "React" },
  { key: "backend", label: "Backend" },
];

export default function Certificados() {
  const [activeTab, setActiveTab] = useState("html-css");
  const [modal, setModal] = useState(null);

  return (
    <div className="p-5">

      <h1 className="text-3xl text-center mb-8">Certificados</h1>

      {/* ABAS */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab.key
                ? "bg-red-600 text-white"
                : "bg-blue-500 text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* LISTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificados[activeTab].map((item, i) => (
          <div
            key={i}
            onClick={() => setModal(item.img)}
            className="p-4 border rounded cursor-pointer hover:bg-gray-100 transition"
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setModal(null)}
        >
          <img
            src={modal}
            className="max-w-[90%] max-h-[90%]"
          />
        </div>
      )}
    </div>
  );
}