"use client"
import "../../../app/globals.css"
import { GoArrowUpRight } from "react-icons/go"
import Link from "next/link";


//Aqui vou criar o componente card para selecionar opção na home page

export default function CardOption ({iconOption, title, description, link}) {
    return (
        <>
            <Link href={link} target="_blank">
                <div className="cardsPage min-w-[500px] min-h-[200px] w-auto h-auto rounded-2xl bg-[var(--black-mod)] flex flex-col justify-center p-5 border border-transparent hover:border-[var(--greenYellow)] transition-all duration-200 ease-in-out">
                    <div className="flex items-center justify-between mb-6">
                        
                        {iconOption && <h1 className="text-4xl"> {iconOption} </h1>}

                        <GoArrowUpRight className="text-4xl text-[#f2f2f2b6]" />
                    </div>

                    {title && <p className="text-2xl text-[var(--text)] mb-2"> {title} </p>}

                    {description && <p className="text-base text-[#f2f2f2b6]"> {description} </p>}
                </div>
            </Link>
        </>
    );
}
