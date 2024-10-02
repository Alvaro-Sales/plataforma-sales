"use client"
import Link from "next/link"
import "../../../app/globals.css"
import { GoArrowUpRight } from "react-icons/go"


//Aqui vou criar o componente card para selecionar opção na home page

export default function CardOption ({iconOption, title, description, link}) {
    return (
        <>
            <Link href={link} target="_blank">
                <div className="cardsPage w-[450px] h-[200px] rounded-2xl bg-[var(--black-mod)] flex flex-col justify-center p-5 border border-transparent hover:border-[var(--greenYellow)] transition-all duration-300 mobile2:max-w-[400px] mobile2:h-auto">
                    <div className="max-w-full flex items-center justify-between mb-6">
                        
                        {iconOption && <h1 className="text-4xl"> {iconOption} </h1>}

                        <GoArrowUpRight className="text-4xl text-[#f2f2f2b6]" />
                    </div>

                    {title && <p className="max-w-full text-2xl text-[var(--text)] mb-2"> {title} </p>}

                    {description && <p className="max-w-full text-base text-[#f2f2f2b6]"> {description} </p>}
                </div>
            </Link>
        </>
    );
}
