'use client'
import "./globals.css"
import { GoAlert } from "react-icons/go"


export default function Home(){
  return (
    <>
      <main className="contentHome w-full max-w-[2000px] min-h-[767px] flex flex-col p-5 pl-[90px] items-center justify-center">
        <div className="flex items-center justify-center max-w-[800px] h-auto bg-[#222] p-5 gap-x-5 rounded-xl border-l-8 border-l-[#ff0000]">
          <div className="icon">
              <GoAlert className="text-[#ff0000] text-4xl animate-pulse" />
          </div>

          <div className="text-[var(--text)] flex flex-col gap-2">
            <h1 className="text-2xl">
              Aviso importante
            </h1>

            <p className="text-justify text-base tracking-[2px]">
              Por falta de incentivo financeiro a plataforma <span className="copy text-xl">Álvaro Sales</span> parou de funcionar. Para consultar informações sobre os planos do Claro móvel consulte a tabela de preços vigente no 'Ache aqui'.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
