import {
    FaLinkedin,
    FaGithub,
    FaEnvelope
} from "react-icons/fa";

export default function Footer() {
    return (
        <nav className="space-y-5 p-5 border-t">
            <div>
                <section className="flex justify-center gap-10">
                    <a href="https://github.com/antonnifreitas" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/antonni-carlos-de-freitas-moreira-moreira-3a374b339/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="mailto:antonnipessoal@gmail.com?subject=Contato&body=Olá,%20gostaria%20de%20mais%20informações%20sobre%20seu%20trabalho.">
                        <FaEnvelope />
                    </a>
                </section>
            </div>

            <div>
                <h2 className="text-base md:text-3xl font-medium tracking-tight">
                    © 2026: Desenvolvido por Antonni
                </h2>
            </div>
        </nav>
    );
}