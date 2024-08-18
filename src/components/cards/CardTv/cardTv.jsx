"use client"



//Aqui vou criar o componente card para a tv
const CardTv = ({nomePlano, dcc, boleto, netSales, fidelidade}) => {
    return (
        <>
            <div className="w-[450px] h-[650px] rounded-2xl bg-[var(--black-mod)] flex flex-col justify-center p-5 relative transition-transform transform hover:scale-105">

                {nomePlano && <h1 className="text-center text-2xl tracking-[1px] text-[var(--text)] mb-7"> {nomePlano} </h1>}

                {dcc && <p className="text-lg mb-[10px] text-[var(--text)]"> {dcc} </p>}

                {boleto && <p className="text-lg mb-[10px] text-[var(--text)]"> {boleto} </p>}

                <div className="mt-5">
                    {netSales && <p className="text-lg mb-7 text-[var(--text)]"> {netSales} </p>}

                    {fidelidade && <p className="text-lg mb-[10px] text-[var(--greenYellow)]"> {fidelidade} </p>}
                </div>
            </div>
        </>
    );
}


export default CardTv
