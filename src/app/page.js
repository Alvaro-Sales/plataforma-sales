'use client'

import "./globals.css";
// import Image from "next/image";
import "../components/slider/script"
import Card from "../components/card/cardComponent"
import SearchForm from "../components/search/searchComponent"
import Slide from "../components/slider/slideComponent"
import Sidebar from "../components/sidebar/sidebarComponent"

export default function Home(){
  return (
    <>
      <div className="w-full max-w-[100vw] flex justify-between">

        <aside className="fixed m-0 z-50">
          <Sidebar />
        </aside>

        <main className="max-w-full h-auto flex flex-col overflow-x-hidden p-5 pl-[90px]">

          <section className="z-10 my-0 mx-auto max-w-full h-auto !p-0 overflow-hidden">
            <Slide />
          </section>

          <section className="busca my-8 mx-0">
            <SearchForm />
          </section>

          <section className="w-full h-auto flex justify-around flex-wrap items-center mb-8">
            {/* --------------- Card 1 ---------------- */}
            <Card 
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
            <Card 
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
            <Card 
                nomePlano="Controle 20GB"
                extraPlay="Bônus: 5GB + 10GB Extra Play"
                franquia="Franquia total: 35GB"
                dcc="DCC: R$ 59,90"
                boleto="Boleto: R$ 64,90"
                netSales="Net Sales: CONTROLE 20GB + 5GB MULTI"
                fidelidade="Fidelidade 12 Meses, Multa de R$ 120,00."
                modalidade="Migração, Portabilidade e Linha nova."
            />
          </section>
        </main>
      </div>
    </>
  );
}
