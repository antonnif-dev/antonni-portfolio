export default function ProfileSymbolMask() {
    return (
        <div className="relative w-full max-w-[700px] h-[500px] mx-auto overflow-hidden rounded-3xl">

            {/* FUNDO alinhado exatamente ao SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src="/foto-perfil.jpg"
                    alt="Foto de fundo"
                    className="w-[85%] h-auto object-cover scale-110 blur-[3px] brightness-50"
                />
            </div>

            {/* SVG */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <svg
                    viewBox="0 0 500 300"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[85%] h-auto"
                >
                    <defs>
                        <mask id="codeMask">
                            <rect width="100%" height="100%" fill="black" />

                            <path
                                d="M140 70 L70 150 L140 230"
                                stroke="white"
                                strokeWidth="70"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />

                            <path
                                d="M230 250 L290 50"
                                stroke="white"
                                strokeWidth="70"
                                strokeLinecap="round"
                            />

                            <path
                                d="M360 70 L430 150 L360 230"
                                stroke="white"
                                strokeWidth="70"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </mask>
                    </defs>

                    {/* BORDA EXTERNA (mais grossa) */}
                    <path
                        d="M140 70 L70 150 L140 230"
                        stroke="white"
                        strokeWidth="72"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />

                    <path
                        d="M230 250 L290 50"
                        stroke="white"
                        strokeWidth="72"
                        strokeLinecap="round"
                        fill="none"
                    />

                    <path
                        d="M360 70 L430 150 L360 230"
                        stroke="white"
                        strokeWidth="72"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />

                    {/* IMAGEM COM MÁSCARA */}
                    <image
                        href="/foto-perfil.jpg"
                        width="500"
                        height="300"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#codeMask)"
                    />
                </svg>
            </div>
        </div>
    );
}