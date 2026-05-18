import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from '../pages/Inicio';


export default function Navbar() {
    const navigate = useNavigate();
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <nav className="flex justify-between gap-2 p-6 md:p-10 bg-sky-800 dark:bg-white dark:rounded-b-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center leading-tight"
                onClick={() => navigate('/')}>
                <p className="titulo-nome text-3xl md:text-5xl text-center font-medium text-white dark:text-black tracking-tight">Antonni Carlos de Freitas Moreira</p>
            </div>

            <div className="flex gap-4 text-sm md:text-lg flex-col md:flex-row text-white dark:text-black">
                <div className="flex gap-4 md:gap-8 text-sm md:text-lg flex-col md:flex-row">
                    <Link to="/projetos" className="titulo-menu hover:opacity-70 transition">
                        Projetos
                    </Link>
                    <Link to="/certificados" className="titulo-menu hover:opacity-70 transition">
                        Certificados
                    </Link>
                    <Link to="/sobremim" className="titulo-menu hover:opacity-70 transition">
                        Sobre mim
                    </Link>
                </div>
            </div>

            <div>
                <button
                    onClick={() => setDark(!dark)}
                    className="top-4 right-4 z-50 py-8 md:py-0 rounded"
                >
                    {dark ? "🌙" : "☀️"}
                </button>
            </div>

            <div>
            </div>
        </nav>
    )

}