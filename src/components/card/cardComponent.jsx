"use client"


import { MdOutlineFacebook, MdOutlineWhatsapp } from "react-icons/md";
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineTikTok } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandNetflix } from "react-icons/tb";

//Aqui vou criar o componente card

const CardComponent = ({nomePlano, extraPlay, franquia, dcc, boleto, ddd, netSales, fidelidade, modalidade, incluso, dependentePago, dependenteGratis}) => {
    return (
        <>
            <div className="w-[500px] h-[700px] rounded-2xl bg-[#0000004d] flex flex-col justify-center p-5 m-5 relative">

                {nomePlano && <h1 className="text-center text-3xl tracking-[1px] text-white"> {nomePlano} </h1>}

                <div class="mt-7 flex items-center mb-[10px]">
                    <p className="text-xl mb-[10px] text-white">Apps ilimitados:</p>

                    <MdOutlineWhatsapp
                        className="ml-3 w-8 h-8 text-white"
                    />
                </div>

                {incluso && <p className="text-xl mb-[10px] text-white"> {incluso} </p>}

                {extraPlay && <p className="text-xl mb-[10px] text-white"> {extraPlay} </p>}

                <div class="flex items-center flex-wrap mt-3 mb-5">

                    <p className="text-xl mb-[10px] text-white">Apps extra play:</p>

                    <div className="flex items-center">
                        <AiOutlineYoutube
                            className="ml-3 w-7 h-7 text-white"
                        />

                        <MdOutlineFacebook
                            className="ml-3 w-7 h-7 text-white"
                        />

                        <AiOutlineInstagram
                            className="ml-3 w-7 h-7 text-white"
                        />

                        <RiTwitterXFill
                            className="ml-3 w-7 h-7 text-white"
                        />

                        <TbBrandNetflix
                            className="ml-3 w-7 h-7 text-white"
                        />

                        <AiOutlineTikTok
                            className="ml-3 w-7 h-7 text-white"
                        />
                    </div>
                </div>

                {franquia && <p className="text-xl mb-[10px] text-white"> {franquia} </p>}
                {dcc && <p className="text-xl mb-[10px] text-white"> {dcc} </p>}
                {boleto && <p className="text-xl mb-[10px] text-white"> {boleto} </p>}

                {ddd && <p className="flex flex-col items-center text-xl mb-[10px] text-white"> {ddd} </p>}

                <div class="mt-5">
                    {netSales && <p className="text-xl mb-7 text-white"> {netSales} </p>}

                    {dependentePago && <p className="text-xl mb-[10px] text-white"> {dependentePago} </p>}

                    {dependenteGratis && <p className="text-xl mb-6 text-white"> {dependenteGratis} </p>}

                    {fidelidade && <p className="text-xl mb-[10px] text-white"> {fidelidade} </p>}

                    {modalidade && <p className="text-xl mb-[10px] text-white"> {modalidade} </p>}
                </div>
            </div>
        </>
    );
}

export default CardComponent
