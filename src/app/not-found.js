'use client'

import Image from "next/image";
import Link from "next/link";

export default function notFound(){
    return (
        <>
            <main className="w-[100vw] h-[100vh] grid place-items-center">

                <div class="max-w-[1600px] max-h-full grid grid-cols-2 grid-rows-1 place-items-center gap-x-20 box-content">

                    <Image
                        src="/images/alien.svg"
                        alt="Imagem de um ovini abduzindo um personagem"
                        width={500}
                        height={549}
                        quality={100}
                        priority={true}
                    />

                    <div className="grid grid-cols-1 place-items-center">

                        <div className="mb-10 w-full grid place-items-center text-center">
                            <h1 className="text-white text-6xl mb-2">
                                Erro 404
                            </h1>

                            <h2 className="text-white text-3xl tracking-wider mb-2">
                                Ops.. Página não encontrada. Parece que você andou vasculhando demais...
                            </h2>
                        </div>

                        <button className="text-white bg-transparent px-5 py-2 rounded-3xl outline-none w-[200px] h-[40px] border-solid border-white border hover:bg-[#0080ffbb] hover:border-[#0080ffbb] duration-300">

                            <Link href="/" className="tracking-wider text-center">
                                Voltar para o início
                            </Link>

                        </button>
                    </div>
                </div>  
            </main>
        </>
    )
}