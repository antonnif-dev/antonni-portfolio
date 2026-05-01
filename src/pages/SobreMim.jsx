import SvgMascara from '../componentes/SvgMascara';
import ImagemSvgMascara from '../componentes/ImagemSvgMascara';

export default function SobreMim() {
    return (
        <div className="max-w-5xl mx-auto px-5 space-y-5 pb-5">

            <h1 className="text-3xl font-semibold">Sobre mim</h1>

            <div>
                {/* TEXTO INICIAL */}
                <p className="leading-relaxed">
                    Sou desenvolvedor focado em criar aplicações modernas, funcionais e com
                    boa experiência para o usuário. Tenho experiência com tecnologias como
                    React, Node.js e Tailwind, desenvolvendo desde landing pages até sistemas
                    completos (SaaS).

                    Meu objetivo é construir soluções escaláveis e bem estruturadas, sempre
                    buscando evoluir tanto tecnicamente quanto na forma de resolver problemas.
                </p>
            </div>

            {/* BLOCO IMAGEM + TEXTO */}
            <div className="grid md:grid-cols-2 gap-2 items-center">

                {/* IMAGEM */}
                <ImagemSvgMascara />

                {/* TEXTO LADO */}
                <div>
                    <p className="leading-relaxed">
                        Comecei minha jornada na programação com foco em frontend, mas rapidamente
                        evoluí para o desenvolvimento fullstack, criando APIs, sistemas completos
                        e arquiteturas mais robustas.

                        Atualmente trabalho no desenvolvimento de projetos próprios, incluindo
                        plataformas SaaS voltadas para profissionais como advogados e psicólogos.
                    </p>
                </div>

            </div>

            {/* TEXTO FINAL */}
            <p className="leading-relaxed">
                Além da parte técnica, também tenho interesse em produto e negócio, buscando
                criar soluções que realmente resolvam problemas reais.

                Estou sempre estudando, testando novas ideias e evoluindo meus projetos para
                atingir um nível cada vez mais profissional.
            </p>

        </div>
    );
}