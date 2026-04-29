import { Link } from "react-router-dom";
import Carrossel from '../componentes/Carrossel';
import { useState } from "react";
import ModalProjeto from "../componentes/ModalProjetos";

export default function Projetos() {
    const [selectedProject, setSelectedProject] = useState(null);
    const techColors = {
        Frontend: "bg-blue-500/20 text-blue-500 dark:text-blue-400",
        Backend: "bg-green-500/20 text-green-500 dark:text-green-400",
        BancoDeDados: "bg-purple-500/20 text-purple-500 dark:text-purple-400",
    };

    return (
        <div>
            {/* 
            <div className="p-10">
                <Carrossel />
            </div>
            */}
            <div className="p-5 space-y-8">
                {[
                    {
                        img: "/projetos/saas-juridico.PNG",
                        images: [
                            "/projetos/saas-juridico-modal1.PNG",
                            "/projetos/saas-juridico-modal2.PNG",
                            "/projetos/saas-juridico-modal3.PNG",
                            "/projetos/saas-juridico-modal4.PNG",
                            "/projetos/saas-juridico-modal5.PNG"
                        ],
                        title: "Saas para juristas",
                        description: "Plataforma para escritórios de advocacia. Com ferramentas que possibilitam. Plataforma para psicólogos com prontuário digital, controle de sessões e portal do paciente. Estrutura pensada para multi-tenant e expansão para outros nichos.",
                        techs: {
                            Frontend: ["React", "Tailwind"],
                            Backend: ["Node.js", "Express"],
                            BancoDeDados: ["Firebase"],
                        }
                    },
                    {
                        img: "/projetos/saas-juridico.PNG",
                        images: [
                            "/projetos/sos-ferramentas-modal1.PNG",
                            "/projetos/sos-ferramentas-modal2.PNG",
                            "/projetos/sos-ferramentas-modal3.PNG",
                            "/projetos/sos-ferramentas-modal4.PNG",
                            "/projetos/sos-ferramentas-modal5.PNG"
                        ],
                        title: "SOS Ferramentas",
                        description:
                            "Plataforma para psicólogos com prontuário digital, controle de sessões e portal do paciente. Estrutura pensada para multi-tenant e expansão para outros nichos.",
                        techs: {
                            Frontend: ["Next.js", "Tailwind"],
                            Backend: ["Node.js"],
                            BancoDeDados: ["Firebase"]
                        }
                    },

                    {
                        img: "/projetos/saas-juridico.PNG",
                        images: [
                            "/projetos/saas-juridico-modal1.PNG",
                            "/projetos/saas-juridico-modal2.PNG",
                            "/projetos/saas-juridico-modal3.PNG",
                            "/projetos/saas-juridico-modal4.PNG",
                            "/projetos/saas-juridico-modal5.PNG"
                        ],
                        title: "Landing Pages",
                        description:
                            "Página institucional moderna com foco em conversão, responsividade e SEO. Estrutura leve e otimizada para performance.",
                        techs: {
                            Frontend: ["HTML", "CSS", "JavaScript", "Tailwind"]
                        }
                    },


                ].map((project, index) => (
                    <div
                        key={index}
                        className="grid md:grid-cols-2 gap-2 items-center"
                    >

                        {/* IMAGEM */}
                        <div>
                            <img
                                src={project.img}
                                alt={project.title}
                                onClick={() => setSelectedProject(project)}
                                className="w-full h-full object-cover rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
                            />
                        </div>

                        {/* CONTEÚDO */}
                        <div className="space-y-4">

                            <h2 className="text-2xl font-semibold">
                                {project.title}
                            </h2>

                            {/* TECNOLOGIAS */}
                            <div className="space-y-2 pt-2">

                                {Object.entries(project.techs).map(([category, techs]) => (

                                    <div key={category}>

                                        <span className="text-xs">
                                            {category}:
                                        </span>

                                        <div className="flex flex-wrap gap-2 mt-1 flex justify-center">
                                            {techs.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-3 py-1 text-xs rounded-full ${techColors[category] || "bg-gray-500/20"}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>
                ))}

            </div>
            {selectedProject && (
                <ModalProjeto
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )

};