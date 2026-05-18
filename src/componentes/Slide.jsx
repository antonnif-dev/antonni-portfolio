import { useState, useEffect } from "react";

export default function Slide() {
    const slides = [
        "/projetos/teste-pc.png",
        "/projetos/teste-pc.png",
        "/projetos/teste-pc.png",
    ];

    const slidesMobile = [
        "/projetos/teste-quadrada.png",
        "/projetos/teste-quadrada.png",
        "/projetos/teste-quadrada.png",
    ];

    const [current, setCurrent] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const activeSlides = isMobile ? slidesMobile : slides;

    // autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % activeSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeSlides.length]);

    // swipe
    const handleStart = (x) => {
        setStartX(x);
        setIsDragging(true);
    };

    const handleEnd = (x) => {
        if (!isDragging) return;

        const diff = startX - x;

        if (diff > 50) {
            setCurrent((prev) => (prev + 1) % activeSlides.length);
        } else if (diff < -50) {
            setCurrent((prev) =>
                prev === 0 ? activeSlides.length - 1 : prev - 1
            );
        }

        setIsDragging(false);
    };

    useEffect(() => {
        setCurrent(0);
    }, [isMobile]);

    return (
        <div
            className="relative w-[365px] md:w-3xl h-81 md:h-109 overflow-hidden rounded-xl borda"
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseUp={(e) => handleEnd(e.clientX)}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
            {activeSlides.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`slide ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-contain object-top transition-opacity duration-700 ${index === current
                        ? "opacity-100"
                        : "opacity-0"
                        }`}
                />
            ))}

            {/* indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {activeSlides.map((_, i) => (
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