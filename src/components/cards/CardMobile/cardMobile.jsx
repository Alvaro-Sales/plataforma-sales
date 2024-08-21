"use client"
import { MdOutlineFacebook, MdOutlineWhatsapp } from "react-icons/md";
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineTikTok } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandNetflix } from "react-icons/tb";
import CategoriaExclusive from "../../categoria/categoria"
import "../../../app/globals.css"


//Aqui vou criar o componente card para o mobile
const CardMobile = ({nomePlano, extraPlay, franquia, dcc, boleto, ddd, netSales, fidelidade, modalidade, incluso, dependentePago, dependenteGratis, categoria}) => {
    return (
        <>
            <div className="cardsPage w-[450px] h-[650px] rounded-2xl bg-[var(--black-mod)] flex flex-col justify-center p-5 relative transition-transform transform hover:scale-105">

                <CategoriaExclusive 
                    categoria={categoria}
                />

                {nomePlano && <h1 className="nomePlano text-center text-2xl tracking-[1px] text-[var(--text)]"> {nomePlano} </h1>}

                <div className="mt-5 flex items-center mb-2">
                    <p className="text-lg mb-2 text-[var(--text)]">Apps ilimitados:</p>

                    <MdOutlineWhatsapp
                        className="ml-3 w-8 h-8 text-[var(--text)]"
                    />
                </div>

                {incluso && <p className="text-lg mb-2 text-[var(--text)]"> {incluso} </p>}

                {extraPlay && <p className="text-lg mb-2 text-[var(--text)]"> {extraPlay} </p>}

                <div className="flex items-center flex-wrap mt-2 mb-2">

                    <p className="text-lg mb-2 text-[var(--text)]">Apps extra play:</p>

                    <div className="flex items-center">
                        <AiOutlineYoutube
                            className="ml-2 w-7 h-7 text-[var(--text)]"
                        />

                        <MdOutlineFacebook
                            className="ml-2 w-7 h-7 text-[var(--text)]"
                        />

                        <AiOutlineInstagram
                            className="ml-2 w-7 h-7 text-[var(--text)]"
                        />

                        <RiTwitterXFill
                            className="ml-2 w-7 h-7 text-[var(--text)]"
                        />

                        <TbBrandNetflix
                            className="ml-2 w-7 h-7 text-[var(--text)]"
                        />

                        <AiOutlineTikTok
                            className="ml-2 w-7 h-7 text-[var(--text)]"
                        />
                    </div>
                </div>

                {franquia && <p className="text-lg mb-2 text-[var(--text)]"> {franquia} </p>}
                {dcc && <p className="text-lg mb-2 text-[var(--text)]"> {dcc} </p>}
                {boleto && <p className="text-xl mb-2 text-[var(--text)]"> {boleto} </p>}

                {ddd && <p className="flex flex-col items-center text-lg mb-2 text-[var(--text)]"> {ddd} </p>}

                <div className="mt-2">
                    {netSales && <p className="text-lg mb-2 text-[var(--text)]"> {netSales} </p>}

                    {dependentePago && <p className="text-lg mb-2 text-[var(--text)]"> {dependentePago} </p>}

                    {dependenteGratis && <p className="text-lg mb-2 text-[var(--text)]"> {dependenteGratis} </p>}

                    {fidelidade && <p className="text-lg mb-2 text-[var(--greenYellow)]"> {fidelidade} </p>}

                    {modalidade && <p className="text-lg mb-2 text-[var(--greenYellow)]"> {modalidade} </p>}
                </div>
            </div>
        </>
    );
}


export default CardMobile
