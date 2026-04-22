import { Link } from "react-router-dom";
import Tecnologias from "../componentes/Tecnologias";
import Slide from '../componentes/Slide';
import CardServicos from "../componentes/CardServicos";
import { FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

const servicos = [
    {
        icon: <FaCode />,
        title: "Criação de Sites",
        description: "Crio sites..."
    },
    {
        icon: <FaMobileAlt />,
        title: "Aplicativos Mobile",
        description: "Crio apps..."
    },
    {
        icon: <FaLaptopCode />,
        title: "Aplicações Web",
        description: "Crio sistemas..."
    },
];

export default function Inicio() {

    return (
        <div>
            <div className="p-5 md:p-10">
                <div>
                    <Tecnologias />
                </div>
                <div className="px-10 object-contain">
                    <Slide />
                </div>
            </div>

            <div>
                <h2>O que eu posso fazer por você:</h2>
                <section className="grid grid-cols-3 gap-2 md:gap-20 p-5 md:px-20">
                    {servicos.map((service, index) => (
                        <CardServicos
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </section>
            </div>

            <div className="p-5 py-10 flex justify-center">
                <div className="max-w-3xl text-center">

                    <h2 className="text-xl md:text-2xl italic">
                        “Não é a linguagem de programação que define o programador,
                        mas sim sua lógica.”
                    </h2>

                    <span className="block mt-4 text-sm">
                        – David Ribeiro Guilherme
                    </span>

                </div>
            </div>
        </div>

    )

};