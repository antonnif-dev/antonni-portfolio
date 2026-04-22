import { useState, useEffect } from "react";

export default function Carrossel() {
    const [activeSlide, setActiveSlide] = useState(null);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const slides = [
        {
            img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
            title: "Projeto 1",
            description: "Sistema de gestão jurídica...",
            link: "https://meuprojeto1.com"
        },
        {
            img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
            title: "Projeto 2",
            description: "Landing page profissional...",
            link: "https://meuprojeto2.com"
        },
        {
            img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3",
            title: "Projeto 3",
            description: "SaaS para psicólogos...",
            link: "https://meuprojeto3.com"
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleStart = (x) => {
        setStartX(x);
        setIsDragging(true);
    };

    const handleEnd = (x) => {
        if (!isDragging) return;

        const diff = startX - x;

        if (diff > 50) {
            // arrastou pra esquerda → próximo
            setCurrent((prev) => (prev + 1) % slides.length);
        } else if (diff < -50) {
            // arrastou pra direita → anterior
            setCurrent((prev) =>
                prev === 0 ? slides.length - 1 : prev - 1
            );
        }

        setIsDragging(false);
    };

    return (
        <div
            className="relative w-full h-80 overflow-hidden rounded-xl"
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseUp={(e) => handleEnd(e.clientX)}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === current
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                        }`}
                >
                    <img
                        src={slide.img}
                        alt={`slide ${index}`}
                        className="w-full h-full object-cover"
                    />

                    {/* BOTÃO */}
                    <div className="absolute inset-0 flex items-end justify-center pb-6">
                        <button
                            onClick={() => setActiveSlide(index)}
                            className="bg-white/90 hover:bg-white text-black px-4 py-2 rounded-lg shadow"
                        >
                            Acessar projeto
                        </button>
                    </div>
                </div>
            ))}

            {activeSlide !== null && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full">

                        <h2 className="text-xl font-bold mb-2">
                            {slides[activeSlide].title}
                        </h2>

                        <p className="mb-4">
                            {slides[activeSlide].description}
                        </p>

                        <a
                            href={slides[activeSlide].link}
                            target="_blank"
                            className="bg-black text-white px-4 py-2 rounded inline-block"
                        >
                            Ir para o projeto
                        </a>

                        <button
                            onClick={() => setActiveSlide(null)}
                            className="block mt-4 text-sm"
                        >
                            Fechar
                        </button>

                    </div>
                </div>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full cursor-pointer transition-all ${current === i
                            ? "w-6 bg-white"
                            : "w-2 bg-white/50"
                            }`}
                    />
                ))}
            </div>

        </div>
    );
}