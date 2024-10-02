'use client'
import "../../app/globals.css"
import Link from "next/link"
import Image from "next/image"
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai"

export default function Footer(){
    return(
        <>
            <div className="max-w-[100vw] h-auto flex flex-col items-center flex-wrap">
                <nav className="w-full py-5 pr-5 pl-[90px] bg-[var(--black-mod)]">
                    <Image 
                        src="/images/logo.svg"
                        width={50}
                        height={50}
                        alt="Logotipo"
                        priority="true"
                        className="mx-5"
                    />

                    <div className="w-full flex justify-between items-center mt-5 gap-10 flex-wrap mobile:gap-5 mobile:flex-col-reverse mobile:justify-center">
                        <p className="text-[#f2f2f2b0] text-center">
                            &copy; 2024 <span className="copy text-xl"> Álvaro Sales</span>, Todos os direitos reservados.
                        </p>
                        
                        <div className="flex justify-center items-center gap-5 flex-wrap mobile2:ml-[-10px]">
                            <Link href="https://www.instagram.com/alvarosales.tech/" target="_blank" className="text-[var(--icon)] hover:text-[var(--text)] text-[30px] transition-colors duration-300">
                                <AiOutlineInstagram />
                            </Link>

                            <Link href="https://github.com/Alvaro-Sales/" target="_blank" className="text-[var(--icon)] hover:text-[var(--text)] text-[30px] transition-colors duration-300">
                                <AiOutlineGithub />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
