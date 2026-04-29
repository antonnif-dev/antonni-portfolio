import CarrosselVertical from "./CarrosselVertical";

export default function ModalProjeto({ project, onClose }) {
    const techColors = {
        Frontend: "bg-blue-500/20 text-blue-500 dark:text-blue-400",
        Backend: "bg-green-500/20 text-green-500 dark:text-green-400",
        BancoDeDados: "bg-purple-500/20 text-purple-500 dark:text-purple-400",
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2">

            <div className="bg-white dark:bg-zinc-900 w-full h-full md:h-[90%] md:w-[90%] rounded-xl overflow-hidden relative pb-5">

                {/* BOTÃO FECHAR */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 text-white bg-black/70 px-3 py-1 rounded"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 md:h-full">

                    {/* CARROSSEL */}
                    <div className="md:col-span-2 h-[50vh] md:h-125 overflow-hidden">
                        <CarrosselVertical images={project.images || [project.img]} />
                    </div>

                    {/* SIDEBAR */}
                    <div className="p-4 md:p-6 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-200 dark:border-zinc-700">

                        <h2 className="text-xl font-semibold mb-4 text-white!">
                            {project.title}
                        </h2>

                        {/* DESCRIÇÃO COMPLETA */}
                        <p className="leading-relaxed text-white! py-4">
                            {project.description}
                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
}