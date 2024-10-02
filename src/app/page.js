'use client'
import "./globals.css"
import Image from "next/image"
import { RiAppleLine } from "react-icons/ri"
import { TbBrandNetflix, TbTableShare } from "react-icons/tb"
import { HiOutlineSignal } from "react-icons/hi2"
import { MdOutlineLocationOn } from "react-icons/md"
import CardOption from "../components/cards/cardOption/cardOption"
import { AiOutlineAppstoreAdd } from "react-icons/ai"



export default function Home(){
  return (
    <>
      <div className="w-full max-w-[2000px] flex justify-between">
        <main className="w-full max-w-[2000px] h-auto min-h-[767px] flex flex-col p-5 pl-[90px] items-end">

          <div className="w-full h-auto bg-[#3333338e] rounded-xl flex items-center justify-center p-10 gap-10 flex-wrap">
            <Image 
              src="/images/programador.svg"
              width={150}
              height={150}
              alt="Descrição da imagem"
              priority="true"/>

            <div className="max-w-[530px] flex flex-col items-center justify-center text-justify">
              <h1 className="text-[var(--text)] text-xl text-center">
                Olá, seja bem-vindo a plataforma Álvaro Sales.
              </h1>

              <p className="text-[var(--text)] text-base mt-2">
                Sinta-se a vontade para consultar o que precisa. Caso não encontre a informação que precisa fale com o seu supervisor ou com o desenvolvedor da plataforma "Álvaro sales" para mais detalhes.
              </p>
            </div>
          </div>

          <section className="w-full h-auto">
            <h1 className="text-center text-3xl text-[var(--text)] mt-10 mb-5 flex items-center justify-center gap-5">
              Opções de serviços

              <span className="cursor-default bg-[var(--greenYellow)] text-[#222222] text-base py-1 px-2 rounded-full">
                NEW
              </span>
            </h1>

            <div className="max-w-full options w-full h-auto flex justify-center flex-wrap items-center mb-8 gap-3 mt-5">
              {/* -----Card 1----- */}
              <CardOption
                link="/pdf/tabelaPrecos.pdf"
                iconOption={<TbTableShare className="text-[var(--green)]" />}
                title="Tabela de preços"
                description="Consulte aqui a tebla oficial atualizada de preços."
              />
              
              {/* -----Card 2----- */}
              <CardOption
                link="https://www.claro.com.br/mapa-de-cobertura"
                iconOption={<HiOutlineSignal className="text-[var(--green)]" />}
                title="Cobertura de sinal"
                description="Verifique se onde o cliente mora tem sinal."
              />

              {/* -----Card 3----- */}
              <CardOption
                link="https://www.claro.com.br/encontre-uma-loja"
                iconOption={<MdOutlineLocationOn className="text-[var(--green)]" />}
                title="Loja mais próxima"
                description="Localize a loja mais próxima do cliente."
              />

              {/* -----Card 4----- */}
              <CardOption
                link="https://www.claro.com.br/claro-tv-mais/assinar/globoplay#ativacao"
                iconOption={<AiOutlineAppstoreAdd className="text-[var(--green)]" />}
                title="Ativação da Globoplay"
                description="passo a passo para ativação do a la carte Globoplay."
              />

              {/* -----Card 5----- */}
              <CardOption
                link="https://www.claro.com.br/max#ativacao"
                iconOption={<AiOutlineAppstoreAdd className="text-[var(--green)]" />}
                title="Ativação do MAX"
                description="passo a passo para ativação do a la carte MAX."
              />

              {/* -----Card 6----- */}
              <CardOption
                link="https://www.claro.com.br/claro-tv-mais/assinar/apple-tv#ativar"
                iconOption={<RiAppleLine className="text-[var(--green)]" />}
                title="Ativação do Apple tv+"
                description="passo a passo para ativação do a la carte Apple tv+."
              />

              {/* -----Card 7----- */}
              <CardOption
                link="https://www.claro.com.br/netflix#ativacao"
                iconOption={<TbBrandNetflix className="text-[var(--green)]" />}
                title="Ativação da Netflix"
                description="passo a passo para ativação do a la carte Netflix."
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
