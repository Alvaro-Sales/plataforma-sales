"use client"
import "../../app/globals.css"
import Sidebar from "../../components/sidebar/sidebarComponent"
import CardMobile from "../../components/cards/CardMobile/cardMobile"


const MobilePage = () => {
    return(
        <>
            <div className="w-full max-w-[2000px] flex justify-between">

                <aside className="fixed m-0 z-50">
                    <Sidebar />
                </aside>

                <main className="w-full h-auto flex flex-col items-center justify-center pt-10 pl-[75px] pr-5">

                    <section className="w-full h-full grid auto-cols-auto auto-rows-auto place-items-center gap-5">

                        <h1 className="mb-5 text-white text-3xl">
                            Mobile Page
                        </h1>

                        <div className="w-full h-full grid gridAutoAjuste gap-5 justify-center content-center">
                            {/* --------------- Card 1 ---------------- */}
                            <CardMobile 
                                categoria="Exclusivo"
                                nomePlano="Controle 20GB"
                                extraPlay="Bônus: 3GB Extra Play"
                                franquia="Franquia total: 23GB"
                                dcc="DCC: R$ 39,90"
                                boleto="Boleto: R$ 44,90"
                                ddd="Exclusivo para DDD: 14, 18, 27, 31, 32, 33, 34, 35, 38, 41, 43, 44, 48, 71, 79, 92 e 96."
                                netSales="Net Sales: CONTROLE ON 15GB + 5GB MULTI"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 120,00."
                                modalidade="Migração, Portabilidade e Linha nova."
                            />

                            {/* --------------- Card 2 ---------------- */}
                            <CardMobile 
                                nomePlano="Controle 15GB"
                                extraPlay="Bônus: 5GB + 8GB Extra Play"
                                franquia="Franquia total: 28GB"
                                dcc="DCC: R$ 49,90"
                                boleto="Boleto: R$ 54,90"
                                netSales="Net Sales: CONTROLE 15GB + 5GB MULTI"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 120,00."
                                modalidade="Migração, Portabilidade e Linha nova."
                            />

                            {/* --------------- Card 3 ---------------- */}
                            <CardMobile 
                                nomePlano="Controle 20GB"
                                extraPlay="Bônus: 5GB + 10GB Extra Play"
                                franquia="Franquia total: 35GB"
                                dcc="DCC: R$ 59,90"
                                boleto="Boleto: R$ 64,90"
                                netSales="Net Sales: CONTROLE 20GB + 5GB MULTI"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 120,00."
                                modalidade="Migração, Portabilidade e Linha nova."
                            />
                            
                            {/* --------------- Card 4 ---------------- */}
                            <CardMobile 
                                nomePlano="Controle 20GB Gaming (TWITCH TV)"
                                extraPlay="Bônus: 5GB + 10GB Extra Play"
                                franquia="Franquia total: 35GB"
                                dcc="DCC: R$ 69,90"
                                boleto="Boleto: R$ 74,90"
                                netSales="Net Sales: CONTROLE 20GB + 5GB GAMING MULTI"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 120,00."
                                modalidade="Migração, Portabilidade e Linha nova."
                            />

                            {/* --------------- Card 5 ---------------- */}
                            <CardMobile 
                                categoria="Portabilidade"
                                nomePlano="Pós pago 25GB + 25GB"
                                incluso="Incluso: Passaporte Américas (titular)."
                                franquia="Franquia total: 50GB"
                                dcc="DCC: R$ 59,90"
                                boleto="Boleto: R$ 69,90"
                                netSales="Net Sales: POS 25GB S/AP PAD"
                                dependentePago="Dependente pago: Até 1"
                                dependenteGratis="Dependente Gratuito: 0"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                                modalidade="Portabilidade e Linha nova."
                            />

                            {/* --------------- Card 6 ---------------- */}
                            <CardMobile 
                                categoria="Portabilidade"
                                nomePlano="Pós pago 50GB + 50GB"
                                incluso="Incluso: Passaporte Américas (titular e dependente)."
                                franquia="Franquia total: 100GB"
                                dcc="DCC: R$ 99,90"
                                boleto="Boleto: R$ 109,90"
                                netSales="Net Sales: P30$ CONTA 50GB S/AP RENT 24"
                                dependentePago="Dependente pago: Até 2"
                                dependenteGratis="Dependente Gratuito: 0"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                                modalidade="Portabilidade e Linha nova."
                            />

                            {/* --------------- Card 7 ---------------- */}
                            <CardMobile 
                                nomePlano="Pós pago 50GB + 50GB"
                                incluso="Incluso: Passaporte Américas (titular e dependente)."
                                franquia="Franquia total: 100GB"
                                dcc="DCC: R$ 109,90"
                                boleto="Boleto: R$ 119,90"
                                netSales="Net Sales: POS 50GB S/AP PAD"
                                dependentePago="Dependente pago: Até 2"
                                dependenteGratis="Dependente Gratuito: 0"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                                modalidade="Migração, Portabilidade e Linha nova."
                            />

                            {/* --------------- Card 8 ---------------- */}
                            <CardMobile 
                                nomePlano="Pós pago 100GB + 100GB"
                                incluso="Incluso: Passaporte Américas (titular e dependente)."
                                franquia="Franquia total: 200GB"
                                dcc="DCC: R$ 159,90"
                                boleto="Boleto: R$ 169,90"
                                netSales="Net Sales: POS 100GB S/AP PAD"
                                dependentePago="Dependente pago: Até 2"
                                dependenteGratis="Dependente Gratuito: 1"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                                modalidade="Migração, Portabilidade e Linha nova."
                            />

                            {/* --------------- Card 9 ---------------- */}
                            <CardMobile 
                                categoria="Portabilidade"
                                nomePlano="Pós pago 150GB + 150GB"
                                incluso="Incluso: Passaporte Américas e Europa (titular e dependente)."
                                franquia="Franquia total: 300GB"
                                dcc="DCC: R$ 179,90"
                                boleto="Boleto: R$ 189,90"
                                netSales="Net Sales: P30$ CONTA 75GB S/AP RENT 24."
                                dependentePago="Dependente pago: Até 2"
                                dependenteGratis="Dependente Gratuito: 2"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                                modalidade="Portabilidade e Linha nova."
                            />

                            {/* --------------- Card 10 ---------------- */}
                            <CardMobile 
                                nomePlano="Pós pago 150GB + 150GB"
                                incluso="Incluso: Passaporte Américas e Europa (titular e dependente)."
                                franquia="Franquia total: 300GB"
                                dcc="DCC: R$ 209,90"
                                boleto="Boleto: R$ 219,90"
                                netSales="Net Sales: POS 150GB S/AP PAD."
                                dependentePago="Dependente pago: Até 2"
                                dependenteGratis="Dependente Gratuito: 2"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                                modalidade="Migração, Portabilidade e Linha nova."
                            />

                            {/* --------------- Card 11 ---------------- */}
                            <CardMobile 
                                nomePlano="Pós pago 300GB + 300GB"
                                incluso="Incluso: Passaporte Mundo (titular e dependente)."
                                franquia="Franquia total: 600GB"
                                dcc="DCC: R$ 309,90"
                                boleto="Boleto: R$ 319,90"
                                netSales="Net Sales: POS 300GB S/AP PAD."
                                dependentePago="Dependente pago: Até 2"
                                dependenteGratis="Dependente Gratuito: 3"
                                fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                                modalidade="Migração, Portabilidade e Linha nova."
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default MobilePage
