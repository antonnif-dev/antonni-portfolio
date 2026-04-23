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
        <nav className='flex justify-around gap-2 p-4'>
            <div className="flex flex-col md:flex-row items-center justify-center px-3 gap-1 md:gap-3 leading-tight"
                onClick={() => navigate('/')}>
                <h2 className="text-base md:text-3xl font-medium tracking-tight">Antonni Carlos de Freitas Moreira</h2>
            </div>

            <div className="flex gap-4 text-sm md:text-lg flex-col md:flex-row">
                <div className="flex gap-4 md:gap-8 text-sm md:text-lg flex-col md:flex-row">
                    <Link to="/projetos" className="hover:opacity-70 transition">
                        Projetos
                    </Link>
                    <Link to="/certificados" className="hover:opacity-70 transition">
                        Certificados
                    </Link>
                    <Link to="/sobremim" className="hover:opacity-70 transition">
                        Sobre mim
                    </Link>
                </div>
            </div>

            <div>
                <button
                    onClick={() => setDark(!dark)}
                    className="top-4 right-4 z-50 px-3 py-2 rounded"
                >
                    {dark ? "🌙" : "☀️"}
                </button>
            </div>

            <div>
            </div>
        </nav>
    )

}