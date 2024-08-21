'use client'

import "./globals.css";
// import Image from "next/image";
import { useEffect, useState } from 'react'
import CardMobile from "../components/cards/CardMobile/cardMobile"
import CardTv from "../components/cards/CardTv/cardTv"
import SearchForm from "../components/search/searchComponent"
import Sidebar from "../components/sidebar/sidebarComponent"



export default function Home(){
  const [searchValue, setSearchValue] = useState('');

  const formatString = (value) => {
    return value
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "");
  };

  useEffect(() => {
    const searchInput = document.getElementById('search');

    const handleInput = (event) => {
      const value = formatString(event.target.value);
      setSearchValue(value);

      const items = document.querySelectorAll('.cardsPage');
      let hasResults = false;

      if (value !== '') {
        items.forEach((cardsPage) => {
          const itemTitle = cardsPage.querySelector('.nomePlano').textContent;
          if (formatString(itemTitle).indexOf(value) !== -1) {
            cardsPage.style.display = 'flex';
            hasResults = true;
          } else {
            cardsPage.style.display = 'none';
          }
        });

        if (!hasResults) {
          document.querySelector('#noResults').style.display = 'block';
        } else {
          document.querySelector('#noResults').style.display = 'none';
        }
      } else {
        items.forEach((cardsPage) => cardsPage.style.display = 'flex');
        document.querySelector('#noResults').style.display = 'none';
      }
    };

    searchInput.addEventListener('input', handleInput);

    // Cleanup event listener on component unmount
    return () => {
      searchInput.removeEventListener('input', handleInput);
    };
  }, []);


  return (
    <>
      <div className="w-full max-w-[2000px] flex justify-between">

        <aside className="fixed m-0 z-50">
          <Sidebar />
        </aside>

        <main className="w-full max-w-[2000px] h-auto flex flex-col justify-center items-end p-5 px-[90px]">

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
            <CardMobile
                categoria="Exclusivo"
                nomePlano="Controle 15GB"
                extraPlay="Bônus: 5GB + 8GB Extra Play"
                franquia="Franquia total: 28GB"
                dcc="DCC: R$ 39,90"
                boleto="Boleto: R$ 44,90"
                ddd="Exclusivo para DDD: 14, 18, 22, 27, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 48, 49, 55, 66, 71, 77, 79, 92, 94 e 96."
                netSales="Net Sales: CONTROLE 15GB + 5GB MULTI"
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
            <CardTv 
                nomePlano="Claro Streaming"
                dcc="DCC: R$ 91,00"
                boleto="Boleto: R$ 96,00"
                netSales="Net Sales: BOX TOP NETFLIX ANUNCIO"
                fidelidade="Não possui fidelidade. Multa de R$ 0,00."
            />
          </section>
        </main>
      </div>
    </>
  );
}
