import { useState } from "react";

export default function CarrosselVertical({ images }) {
    const [current, setCurrent] = useState(0);

    return (
        <div className="h-full overflow-y-auto snap-y snap-mandatory">

            {images.map((img, index) => (
                <div
                    key={index}
                    className="h-full snap-start flex items-center justify-center"
                >
                    <img
                        src={img}
                        alt={`slide ${index}`}
                        className="w-full h-60 md:h-120 object-contain rounded-xl shadow-lg px-8 md:pb-7"
                    />
                </div>
            ))}

        </div>
    );
}