import CarrosselVertical from "./CarrosselVertical";

export default function ModalProjeto({ project, onClose }) {
    const techColors = {
        Frontend: "bg-blue-500/20 text-blue-500 dark:text-blue-400",
        Backend: "bg-green-500/20 text-green-500 dark:text-green-400",
        BancoDeDados: "bg-purple-500/20 text-purple-500 dark:text-purple-400",
    };

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">

            <div className="bg-white dark:bg-zinc-900 w-full h-full md:h-[90%] md:w-[90%] rounded-xl overflow-hidden relative py-5">

                {/* BOTÃO FECHAR */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 text-white bg-black/70 px-3 py-1 rounded"
                >
                    ✕
                </button>

                <div className="grid md:grid-cols-3 h-full">

                    {/* CARROSSEL */}
                    <div className="md:col-span-2 h-full md:h-120 overflow-hidden">
                        <CarrosselVertical images={project.images || [project.img]} />
                    </div>

                    {/* SIDEBAR */}
                    <div className="p-6 overflow-y-auto border-l border-gray-200 dark:border-zinc-700">

                        <h2 className="text-xl font-semibold mb-4">
                            {project.title}
                        </h2>

                        {/* TECNOLOGIAS */}
                        <div className="space-y-4 mb-6">

                            {Object.entries(project.techs).map(([category, techs]) => (


                                <div key={category}>

                                    {/* TÍTULO DA CATEGORIA */}
                                    <h3 className="text-sm font-semibold mb-2">
                                        {category}
                                    </h3>

                                    {/* ITENS */}
                                    <div className="flex flex-wrap gap-2">
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

                        {/* DESCRIÇÃO COMPLETA */}
                        <p className="leading-relaxed">
                            {project.description}
                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
}