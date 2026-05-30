import { Link } from "react-router-dom";
import Carrossel from '../componentes/Carrossel';
import { useState, useEffect } from "react";
import ModalProjeto from "../componentes/ModalProjetos";

export default function Projetos() {
    const [selectedProject, setSelectedProject] = useState(null);
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);
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
                        img: "/projetos/sos-saude/capa-saude.png",
                        images: [
                            "/projetos/sos-saude/modal-dashboard.png",
                            "/projetos/sos-saude/modal-pacientes.png",
                            "/projetos/sos-saude/modal-sessoes.png",
                            "/projetos/sos-saude/modal-prontuario.png",
                            "/projetos/sos-saude/modal-anamnese.png",
                            "/projetos/sos-saude/modal-mapaEvolucao.png",
                        ],
                        title: "SOS Saúde",
                        description:
                            "Plataforma para psicólogos com prontuário digital, controle de sessões e portal do paciente. Estrutura pensada para multi-tenant e expansão para outros nichos.",
                        techs: {
                            Frontend: ["React", "Vite", "JavaScript", "Tailwind"],
                            Backend: ["Node", "Express",],
                            BancoDeDados: ["Firebase"]
                        }
                    },
                    {
                        img: "/projetos/saas-juridico.PNG",
                        images: [
                            "/projetos/sos-advocacia/modal-dashboard.png",
                            "/projetos/sos-advocacia/modal-pacientes.png",
                            "/projetos/sos-advocacia/modal-sessoes.png",
                            "/projetos/sos-advocacia/modal-agenda.png",
                            "/projetos/sos-advocacia/modal-documentos.png",
                            "/projetos/sos-advocacia/modal-mural.png",
                        ],
                        title: "SOS Advocacia",
                        description: "Plataforma para escritórios de advocacia. Com ferramentas que possibilitam. Plataforma para psicólogos com prontuário digital, controle de sessões e portal do paciente. Estrutura pensada para multi-tenant e expansão para outros nichos.",
                        techs: {
                            Frontend: ["React", "Vite", "JavaScript", "Tailwind"],
                            Backend: ["Node", "Express",],
                            BancoDeDados: ["Firebase"]
                        }
                    },
                    {
                        img: "/projetos/institucionais/capa-institucionais.png",
                        images: [
                            "/projetos/institucionais/modal-1.png",
                            "/projetos/institucionais/modal-2.png",
                            "/projetos/saas-juridico-modal2.PNG",
                            "/projetos/saas-juridico-modal3.PNG",
                            "/projetos/saas-juridico-modal4.PNG",
                            "/projetos/saas-juridico-modal5.PNG"
                        ],
                        title: "Landing Pages",
                        description:
                            "Página institucional moderna com foco em conversão, responsividade e SEO. Estrutura leve e otimizada para performance.",
                        techs: {
                            Frontend: ["React", "JavaScript", "Tailwind"]
                        }
                    },
                    {
                        img: "/projetos/sos-musico/capa-musico.png",
                        images: [
                            "/projetos/sos-advocacia/modal-dashboard.png",
                            "/projetos/sos-advocacia/modal-pacientes.png",
                            "/projetos/sos-advocacia/modal-sessoes.png",
                            "/projetos/sos-advocacia/modal-agenda.png",
                            "/projetos/sos-advocacia/modal-documentos.png",
                            "/projetos/sos-advocacia/modal-mural.png",
                        ],
                        title: "SOS Músico",
                        description: "Plataforma para escritórios de advocacia. Com ferramentas que possibilitam. Plataforma para psicólogos com prontuário digital, controle de sessões e portal do paciente. Estrutura pensada para multi-tenant e expansão para outros nichos.",
                        techs: {
                            Frontend: ["React", "Vite", "JavaScript", "Tailwind"],
                            Backend: ["Node", "Express",],
                            BancoDeDados: ["Supabase"]
                        }
                    },
                    {
                        img: "/projetos/numero-secreto.png",
                        images: [
                            "/projetos/institucionais/modal-1.png",
                            "/projetos/institucionais/modal-2.png",
                            "/projetos/saas-juridico-modal2.PNG",
                            "/projetos/saas-juridico-modal3.PNG",
                            "/projetos/saas-juridico-modal4.PNG",
                            "/projetos/saas-juridico-modal5.PNG"
                        ],
                        title: "Projetos de estudante",
                        description:
                            "Página institucional moderna com foco em conversão, responsividade e SEO. Estrutura leve e otimizada para performance.",
                        techs: {
                            Frontend: ["React", "JavaScript", "Tailwind"]
                        }
                    },


                ].map((project, index) => (
                    <div
                        key={index}
                        className="grid md:grid-cols-2 gap-7 items-center"
                    >

                        {/* IMAGEM */}
                        <div className="relative group">

                            <img
                                src={project.img}
                                alt={project.title}
                                onClick={() => setSelectedProject(project)}
                                className="
                            w-full h-full object-cover rounded-xl shadow-lg cursor-pointer
                            transition duration-300
                            group-hover:scale-[1.02]
                            borda
                            hover:shadow-black dark:hover:shadow-yellow-400/30
                            hover:border-black dark:hover:border-yellow-300/40
                            "
                            />

                            {/* FLOATING CARD */}
                            <div
                                onClick={() => setSelectedProject(project)}
                                className="
                            absolute bottom-2 left-1/2
                            bg-black/80 dark:bg-zinc-900/90
                            backdrop-blur-md
                            text-white
                            px-2.5 py-1.5
                            rounded-2xl
                            shadow-2xl
                            border border-white/10
                            flex items-center gap-2
                            cursor-pointer
                            transition-all duration-300
                            group-hover:bottom-6
                            animate-[float_3s_ease-in-out_infinite]
                            "
                            >

                                {/* Ícone */}
                                <div className="flex items-center justify-center w-10 h-7 md:h-10 rounded-full bg-yellow-400 text-black font-bold">
                                    +
                                </div>

                                {/* Texto */}
                                <div>
                                    <p className="text-xs text-gray-300">
                                        Ver mais informações
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* CONTEÚDO */}
                        <div className="space-y-4">

                            <h2 className="text-2xl font-semibold text-center">
                                {project.title}
                            </h2>

                            {/* TECNOLOGIAS */}
                            <div className="space-y-2 pt-2">

                                {Object.entries(project.techs).map(([category, techs]) => (

                                    <div key={category}>

                                        <span className="text-xs md:text-xl">
                                            {category}:
                                        </span>

                                        <div className="flex flex-wrap gap-2 mt-1 justify-center">
                                            {techs.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-3 py-1 text-xs md:text-xl rounded-full ${techColors[category] || "bg-gray-500/20"}`}
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
    );

};