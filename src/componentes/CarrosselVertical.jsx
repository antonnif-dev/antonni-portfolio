import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CarrosselVertical({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        const containerHeight = e.target.clientHeight;

        const newIndex = Math.round(scrollTop / containerHeight);

        setCurrentIndex(newIndex);

        if (!hasScrolled && scrollTop > 10) {
            setHasScrolled(true);
        }
    };

    return (
        <div className="relative h-full w-full">

            {/* ÁREA SCROLL */}
            <div
                onScroll={handleScroll}
                className="h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide"
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="h-full snap-start flex items-center justify-center"
                    >
                        <img
                            src={img}
                            alt={`slide ${index}`}
                            className="w-full h-100 md:h-120 object-contain rounded-xl shadow-lg px-8 md:pb-7"
                        />
                    </div>
                ))}
            </div>

            {/* DOTS DESKTOP */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-30">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                ? "bg-white scale-125"
                                : "bg-white/40"
                            }`}
                    />
                ))}
            </div>

            {/* DOTS MOBILE */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex md:hidden gap-2 z-30">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                ? "bg-white scale-125"
                                : "bg-white/40"
                            }`}
                    />
                ))}
            </div>

            {/* SETA */}
            <div
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/80 animate-bounce transition-opacity duration-500 md:flex ${hasScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                <ChevronDown size={32} />
            </div>
        </div>
    );
}