"use client"
import "../../app/globals.css"
import Sidebar from "../../components/sidebar/sidebarComponent"
import CardTv from "../../components/cards/CardTv/cardTv"


const HDTV = () => {
    return(
        <>
            <div className="w-full max-w-[100vw] flex justify-between">

                <aside className="fixed m-0 z-50">
                    <Sidebar />
                </aside>

                <main className="max-w-[100vw] w-full h-auto flex flex-col overflow-x-hidden p-5 pl-[70px]">

                    <section className="w-full h-full grid auto-cols-auto auto-rows-auto place-items-center gap-5">

                        <h1 className="mb-5 text-white text-3xl">
                            HDTV Page
                        </h1>

                        <div className="w-full h-full grid gridAutoAjuste gap-5 justify-center content-center">
                            {/* --------------- Card 1 ---------------- */}
                            <CardTv 
                                nomePlano="Claro Streaming"
                                dcc="DCC: R$ 91,00"
                                boleto="Boleto: R$ 96,00"
                                netSales="Net Sales: BOX TOP NETFLIX ANUNCIO"
                                fidelidade="Não possui fidelidade, Multa de R$ 0,00."
                            />

                            {/* --------------- Card 2 ---------------- */}
                            <CardTv 
                                nomePlano="Mix HD"
                                dcc="DCC: R$ 99,90"
                                boleto="Boleto: R$ 104,90"
                                netSales="Net Sales: MIX HD INDIVIDUAL FID"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            />

                            {/* --------------- Card 3 ---------------- */}
                            <CardTv 
                                nomePlano="Top HD Rentabilização"
                                dcc="DCC: R$ 79,90"
                                boleto="Boleto: R$ 84,90"
                                netSales="Net Sales: TOP HD RENT FID 1"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            />
                            
                            {/* --------------- Card 4 ---------------- */}
                            <CardTv 
                                nomePlano="Top HD Rentabilização 2"
                                dcc="DCC: R$ 89,90"
                                boleto="Boleto: R$ 94,90"
                                netSales="Net Sales: TOP HD RENT FID 2"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            />

                            {/* --------------- Card 5 ---------------- */}
                            <CardTv 
                                nomePlano="Exemplo de título"
                                dcc="DCC: R$ 0,00"
                                boleto="Boleto: R$ 0,00"
                                netSales="Net Sales: nome do plano"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 0,00."
                            />

                            {/* --------------- Card 6 ---------------- */}
                            <CardTv 
                                nomePlano="Exemplo de título"
                                dcc="DCC: R$ 0,00"
                                boleto="Boleto: R$ 0,00"
                                netSales="Net Sales: nome do plano"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 0,00."
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default HDTV
