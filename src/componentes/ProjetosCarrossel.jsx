
export default function ProjetosCarrossel() {
  const projetos = [
    "/projetos/sos-saude/capa-saude.png",
    "/projetos/sos-advocacia/capa-advocacia.png",
    "/projetos/sos-musico/capa-musico.png",
    "/projetos/sos-beleza/capa-beleza.png",
    "/projetos/sos-educacao/capa-educacao.png",
    "/projetos/sos-estetica/capa-estetica.png",
    "/projetos/institucionais/capa-institucionais.png",
  ];

  return (
    <div className="overflow-hidden w-full py-2 bg-sky-800 dark:bg-black">
      <div className="flex gap-2 animate-slide-reverse whitespace-nowrap">
        {[...projetos, ...projetos].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Projeto"
            className="h-20 w-auto rounded-lg object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}