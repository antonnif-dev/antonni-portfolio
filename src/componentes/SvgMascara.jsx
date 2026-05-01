export default function ProfileSymbolMask() {
    return (
        <div className="relative flex items-center justify-center w-full max-w-[500px] mx-auto">
            <svg
                viewBox="0 0 500 300"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
            >
                <defs>
                    <mask id="codeMask">
                        <rect width="100%" height="100%" fill="black" />

                        {/* Símbolo < */}
                        <path
                            d="M140 70 L70 150 L140 230"
                            stroke="white"
                            strokeWidth="70"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />

                        {/* Barra / */}
                        <path
                            d="M230 250 L290 50"
                            stroke="white"
                            strokeWidth="70"
                            strokeLinecap="round"
                        />

                        {/* Símbolo > */}
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

                <image
                    href="/foto-perfil.jpg"
                    width="500"
                    height="300"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#codeMask)"
                />
            </svg>
        </div>
    );
}