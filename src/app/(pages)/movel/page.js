"use client"
import "../../globals.css"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from 'react'
import SearchForm from "../../../components/search/searchComponent"
import CardMobile from "../../../components/cards/CardMobile/cardMobile"
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai"


const MobilePage = () => {
    const [searchValue, setSearchValue] = useState('')

    const formatString = (value) => {
        return value
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
        }

    useEffect(() => {
        const searchInput = document.getElementById('search')

        const handleInput = (event) => {
            const value = formatString(event.target.value)
            setSearchValue(value)

            const items = document.querySelectorAll('.cardsPage')
            let hasResults = false

            if (value !== '') {
                items.forEach((cardsPage) => {
                    const itemTitle = cardsPage.querySelector('.nomePlano').textContent
                    if (formatString(itemTitle).indexOf(value) !== -1) {
                        cardsPage.style.display = 'flex'
                        hasResults = true
                    } else {
                        cardsPage.style.display = 'none'
                    }
                })

                if (!hasResults) {
                    document.querySelector('#noResults').style.display = 'block'
                } else {
                    document.querySelector('#noResults').style.display = 'none'
                }
            } else {
                items.forEach((cardsPage) => cardsPage.style.display = 'flex')
                document.querySelector('#noResults').style.display = 'none'
            }
        }

        searchInput.addEventListener('input', handleInput)

        // Cleanup event listener on component unmount
        return () => {
            searchInput.removeEventListener('input', handleInput)
        }
    }, [])


    return(
        <>
            <div className="w-full max-w-[2000px] flex justify-between">
                <main className="w-full h-auto min-h-[767px] flex flex-col items-end p-5 pl-[90px] pr-10">

                    <div className="busca my-8 mx-0">
                        <SearchForm />
                    </div>

                    <section className="w-full h-auto flex justify-around flex-wrap items-center mb-8 gap-6">

                        <div id="noResults" className="hidden">
                            <p className="text-[var(--text)] bg-[var(--green)] py-2 px-5 rounded-full">
                                Opss... Resultado não encontrado.
                            </p>
                        </div>

                        {/* --------------- Card 1 ---------------- */}
                        <CardMobile 
                            categoria="Exclusivo DDD"
                            nomePlano="Controle 20GB"
                            extraPlay="Bônus: 3GB Extra Play"
                            franquia="Franquia total: 23GB"
                            dcc="DCC: R$ 39,90"
                            boleto="Boleto: R$ 44,90"
                            ddd="Exclusivo para DDD: 14, 18, 22, 27, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 48, 49, 55, 66, 71, 77, 79, 92, 94 e 96."
                            netSales="Net Sales: CONTROLE ON 15GB + 5GB MULTI"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ 120,00."
                            modalidade="Migração, Portabilidade e Linha nova."
                        />

                        {/* --------------- Card 2 ---------------- */}
                        <CardMobile 
                            categoria="Portabilidade"
                            nomePlano="Controle 15GB"
                            extraPlay="Bônus: 5GB + 8GB Extra Play"
                            franquia="Franquia total: 28GB"
                            dcc="DCC: R$ 44,90"
                            boleto="Boleto: R$ 49,90"
                            netSales="Net Sales: CONTROLE 15GB + 5GB MULTI + 5GB RENT PORT"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ 120,00."
                            modalidade="Portabilidade e Linha nova."
                        />

                        {/* --------------- Card 3 ---------------- */}
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

                        {/* --------------- Card 4 ---------------- */}
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
                        
                        {/* --------------- Card 5 ---------------- */}
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

                        {/* --------------- Card 6 ---------------- */}
                        <CardMobile 
                            nomePlano="Pós pago 25GB + 25GB"
                            incluso="Incluso: Passaporte Américas (titular)."
                            iconExtra='a'
                            franquia="Franquia total: 50GB"
                            dcc="DCC: R$ 69,90"
                            boleto="Boleto: R$ 79,90"
                            netSales="Net Sales: POS 25GB S/AP PAD"
                            dependentePago="Dependente pago: Até 1"
                            dependenteGratis="Dependente Gratuito: 0"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            modalidade="Migração, Portabilidade e Linha nova."
                        />

                        {/* --------------- Card 7 ---------------- */}
                        <CardMobile 
                            categoria="Portabilidade"
                            nomePlano="Pós pago 50GB + 50GB"
                            incluso="Incluso: Passaporte Américas (titular e dependente)."
                            iconExtra='a'
                            franquia="Franquia total: 100GB"
                            dcc="DCC: R$ 99,90"
                            boleto="Boleto: R$ 109,90"
                            netSales="Net Sales: P30$ CONTA 50GB S/AP RENT 24"
                            dependentePago="Dependente pago: Até 2"
                            dependenteGratis="Dependente Gratuito: 0"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            modalidade="Portabilidade e Linha nova."
                        />

                        {/* --------------- Card 8 ---------------- */}
                        <CardMobile 
                            nomePlano="Pós pago 50GB + 50GB"
                            incluso="Incluso: Passaporte Américas (titular e dependente)."
                            iconExtra='a'
                            franquia="Franquia total: 100GB"
                            dcc="DCC: R$ 109,90"
                            boleto="Boleto: R$ 119,90"
                            netSales="Net Sales: POS 50GB S/AP PAD"
                            dependentePago="Dependente pago: Até 2"
                            dependenteGratis="Dependente Gratuito: 0"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            modalidade="Migração, Portabilidade e Linha nova."
                        />

                        {/* --------------- Card 9 ---------------- */}
                        <CardMobile 
                            nomePlano="Pós pago 100GB + 100GB"
                            incluso="Incluso: Passaporte Américas (titular e dependente)."
                            iconExtra='a'
                            franquia="Franquia total: 200GB"
                            dcc="DCC: R$ 159,90"
                            boleto="Boleto: R$ 169,90"
                            netSales="Net Sales: POS 100GB S/AP PAD"
                            dependentePago="Dependente pago: Até 2"
                            dependenteGratis="Dependente Gratuito: 1"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            modalidade="Migração, Portabilidade e Linha nova."
                        />

                        {/* --------------- Card 10 ---------------- */}
                        <CardMobile 
                            categoria="Portabilidade"
                            nomePlano="Pós pago 150GB + 150GB"
                            incluso="Incluso: Passaporte Américas e Europa (titular e dependente)."
                            iconExtra='a'
                            franquia="Franquia total: 300GB"
                            dcc="DCC: R$ 179,90"
                            boleto="Boleto: R$ 189,90"
                            netSales="Net Sales: P30$ CONTA 75GB S/AP RENT 24."
                            dependentePago="Dependente pago: Até 2"
                            dependenteGratis="Dependente Gratuito: 2"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            modalidade="Portabilidade e Linha nova."
                        />

                        {/* --------------- Card 11 ---------------- */}
                        <CardMobile 
                            nomePlano="Pós pago 150GB + 150GB"
                            incluso="Incluso: Passaporte Américas e Europa (titular e dependente)."
                            iconExtra='a'
                            franquia="Franquia total: 300GB"
                            dcc="DCC: R$ 209,90"
                            boleto="Boleto: R$ 219,90"
                            netSales="Net Sales: POS 150GB S/AP PAD."
                            dependentePago="Dependente pago: Até 2"
                            dependenteGratis="Dependente Gratuito: 2"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            modalidade="Migração, Portabilidade e Linha nova."
                        />

                        {/* --------------- Card 12 ---------------- */}
                        <CardMobile 
                            nomePlano="Pós pago 300GB + 300GB"
                            incluso="Incluso: Passaporte Mundo (titular e dependente)."
                            iconExtra='a'
                            franquia="Franquia total: 600GB"
                            dcc="DCC: R$ 309,90"
                            boleto="Boleto: R$ 319,90"
                            netSales="Net Sales: POS 300GB S/AP PAD."
                            dependentePago="Dependente pago: Até 2"
                            dependenteGratis="Dependente Gratuito: 3"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ 240,00."
                            modalidade="Migração, Portabilidade e Linha nova."
                        />
                    </section>
                </main>
            </div>
            <div className="max-w-[100vw] h-auto flex flex-col items-center flex-wrap">
                <nav className="w-full py-5 px-20 bg-[var(--black-mod)]">
                    <Image 
                        src="/images/logo.svg"
                        width={50}
                        height={50}
                        alt="Logotipo"
                        priority="true"
                        className="ml-5 mb-5"/>

                    <ul className="flex justify-center items-center gap-10 flex-wrap">
                        <li>
                            <Link href={"/"} className="text-[#f2f2f2b0] hover:text-[var(--text)] text-base transition-colors duration-300">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href={"../pages/movel"} className="text-[#f2f2f2b0] hover:text-[var(--text)] text-base transition-colors duration-300">
                                Móvel
                            </Link>
                        </li>

                        <li>
                            <Link href={"#"} className="text-[#f2f2f2b0] hover:text-[var(--text)] text-base transition-colors duration-300">
                                HDTV 
                            </Link>
                        </li>

                        <li>
                            <Link href={"#"} className="text-[#f2f2f2b0] hover:text-[var(--text)] text-base transition-colors duration-300">
                                Wi-Fi
                            </Link>
                        </li>
                    </ul>

                    <div className="w-full flex justify-between items-center mt-5 px-5 gap-10 flex-wrap mobile:flex-col-reverse mobile:justify-center">
                        <p className="text-[#f2f2f2b0]">&copy; 2024 <span className="copy text-xl"> Álvaro Sales</span>, Todos os direitos reservados.</p>
                        
                        <div className="flex justify-center items-center gap-10 flex-wrap">
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

export default MobilePage
