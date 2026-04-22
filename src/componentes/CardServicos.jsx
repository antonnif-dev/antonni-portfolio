export default function CardServicos({ icon, title, description }) {
    return (
        <div className="flex flex-col items-center justify-center max-w-sm rounded-xl shadow-lg p-4 text-center border-3">

            {/* ÍCONE */}
            <div className="mb-4 text-3xl">
                {icon}
            </div>

            {/* TÍTULO */}
            <h2 className="font-semibold text-lg mb-2">
                {title}
            </h2>

            {/* DESCRIÇÃO */}
            <p className="text-sm">
                {description}
            </p>

        </div>
    );
}