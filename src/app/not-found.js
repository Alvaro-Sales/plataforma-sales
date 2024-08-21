'use client'

import Cube from "../components/cubeAnimate/cube"
import Link from "next/link";

export default function notFound(){
    return (
        <>
            <main className="max-w-[100vw] h-[100vh] flex justify-center items-center box-content">

                <div className="max-w-[1800px] h-full flex justify-center items-center px-10 box-content xl:gap-10 gap-5 mobile:flex-col-reverse mobile:justify-between mobile:max-h-[85%]">

                    <div className="min-w-[200px]">
                        <Cube />
                    </div>

                    <div className="max-w-[1000px] flex flex-col justify-center items-center mobile:mb-10">

                        <div className="mb-10 w-full flex flex-col justify-center items-center">
                            <h1 className="text-[var(--text)] text-6xl mb-2 mobile:text-4xl">
                                Erro 404
                            </h1>

                            <h2 className="text-[var(--text)] text-3xl tracking-wider mb-2 text-center mobile:text-lg">
                                Ops.. Página não encontrada. Parece que você andou vasculhando demais...
                            </h2>
                        </div>

                        <button className="text-[var(--text)] bg-transparent px-5 py-2 rounded-3xl outline-none w-[200px] h-[40px] border-solid border-[var(--text)] border hover:bg-[#222222] hover:border-[#222222] duration-300">

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