import { useState, useEffect } from "react";

export default function Slide() {
    const slides = [
        "/src/assets/projetos/saas-juridico-inicio.png",
        "/src/assets/projetos/lex-link.jpeg",
        "/src/assets/projetos/alura-books.png",
    ];

    const [current, setCurrent] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    // autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // swipe
    const handleStart = (x) => {
        setStartX(x);
        setIsDragging(true);
    };

    const handleEnd = (x) => {
        if (!isDragging) return;

        const diff = startX - x;

        if (diff > 50) {
            setCurrent((prev) => (prev + 1) % slides.length);
        } else if (diff < -50) {
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
            {slides.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`slide ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${index === current
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                />
            ))}

            {/* indicadores */}
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