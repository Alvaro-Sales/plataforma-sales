"use client"
import "../../globals.css"
import { useEffect, useState } from 'react'
import CardTv from "../../../components/cards/CardTv/cardTv"
import SearchForm from "../../../components/search/searchComponent"


const HDTV = () => {
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
            <div className="w-full max-w-[100vw] flex justify-between">
                <main className="w-full max-w-[2000px] h-auto flex flex-col justify-center items-end px-[90px]">

                    <section className="busca my-8 mx-0">
                        <SearchForm />
                    </section>

                    <section className="w-full h-auto flex justify-around flex-wrap items-center mb-8 gap-6">

                        <div id="noResults" className="hidden">
                            <p className="text-[var(--text)] bg-[var(--green)] py-2 px-5 rounded-full">
                                Opss... Resultado não encontrado.
                            </p>
                        </div>

                        {/* --------------- Card 1 ---------------- */}
                        <CardTv 
                            nomePlano="TOP HD RENT"
                            dcc="DCC: R$ 79,90"
                            boleto="Boleto: R$ 84,90"
                            grade="Grade: Cerca de 180 canais"
                            netSales="Net Sales: TOP HD RENT FID 1"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ [$]."
                        />
                        
                        {/* --------------- Card 2 ---------------- */}
                        <CardTv 
                            nomePlano="Top HD Rent 2"
                            dcc="DCC: R$ 89,90"
                            boleto="Boleto: R$ 94,90"
                            grade="Grade: Cerca de 200 canais"
                            netSales="Net Sales: TOP HD RENT FID 2"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ [$]."
                        />

                        {/* --------------- Card 3 ---------------- */}
                        <CardTv 
                            nomePlano="CLARO STREAMING"
                            dcc="DCC: R$ 91,00"
                            boleto="Boleto: R$ 96,00"
                            grade="Grade: Cerca de 200 canais"
                            netSales="Net Sales: BOX TOP NETFLIX ANUNCIO"
                            fidelidade="Não possui fidelidade, Multa de R$ 0,00."
                        />

                        {/* --------------- Card 4 ---------------- */}
                        <CardTv 
                            nomePlano="nome do plano"
                            dcc="DCC: R$ 0,00"
                            boleto="Boleto: R$ 0,00"
                            netSales="Net Sales: nome do plano"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ [$]."
                        />

                        {/* --------------- Card 5 ---------------- */}
                        <CardTv 
                            nomePlano="nome do plano"
                            dcc="DCC: R$ 0,00"
                            boleto="Boleto: R$ 0,00"
                            netSales="Net Sales: nome do plano"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ [$]."
                        />

                        {/* --------------- Card 6 ---------------- */}
                        <CardTv 
                            nomePlano="nome do plano"
                            dcc="DCC: R$ 0,00"
                            boleto="Boleto: R$ 0,00"
                            netSales="Net Sales: nome do plano"
                            fidelidade="Fidelidade 12 Meses, Multa de R$ [$]."
                        />
                    </section>
                </main>
            </div>
        </>
    );
}

export default HDTV
