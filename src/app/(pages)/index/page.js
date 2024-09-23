'use client'

import "../../globals.css"
import Link from "next/link"
import Image from "next/image"
//import { getCookie } from "cookies-next"
//import { verifyToken } from "../../../../services/user"
import { useEffect, useState } from 'react'
import SearchForm from "../../../components/search/searchComponent"
import Sidebar from "../../../components/sidebar/sidebarComponent"
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai"
import CardMobile from "../../../components/cards/CardMobile/cardMobile"


// export const getServerSideProps = async ({req, res}) => {
//   try {
//     // Obtém o token de autenticação dos cookies
//     const token = getCookie('authorization', {req, res})

//     // Verifica se o token é válido
//     if(!token) throw new Error('Token inválido')
    
//     verifyToken(token) // Esta função deve verificar o token

//     // Se o token for válido, renderiza a página normalmente
//     return {
//       props: {},
//     }
//   } catch (err) {
//     // Se o token for inválido ou inexistente, redireciona para a página inicial
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/',
//       },
//       props: {},
//     }
//   }
// }



export default function Home(){
  const [searchValue, setSearchValue] = useState('')

  const formatString = (value) => {
    return value
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "")
  };

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

  return (
    <>
      <div className="w-full max-w-[2000px] flex justify-between">

        <aside className="fixed m-0 z-50">
          <Sidebar />
        </aside>

        <main className="w-full max-w-[2000px] h-auto min-h-[767px] flex flex-col p-5 pl-[90px] items-end">

          <div className="w-full h-auto bg-[#3333338e] rounded-xl flex items-center justify-center p-10 gap-10 flex-wrap">
            <Image 
              src="/images/programador.svg"
              width={150}
              height={150}
              alt="Descrição da imagem"
              priority="true"/>

            <div className="max-w-[500px] flex flex-col items-center justify-center text-justify">
              <h1 className="text-[var(--text)] text-xl text-center">
                Olá, seja bem-vindo a plataforma Álvaro Sales.
              </h1>

              <p className="text-[var(--text)] text-base mt-2">
                Sinta-se a vontade para consultar o que precisa. Caso não encontre a informação que precisa fale com o seu supervisor ou com o desenvolvedor da plataforma "Álvaro sales" para mais detalhes.
              </p>
            </div>
          </div>

          <div className="busca my-5 mx-0">
            <SearchForm />
          </div>

          <section className="w-full h-auto flex justify-around flex-wrap items-center mb-8 gap-6 mt-5">

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
              <Link href={"/"} className="text-[#f2f2f2b0] hover:text-[var(--text)] text-base transition-colors duration-300"> Home </Link>
            </li>

            <li>
              <Link href={"../pages/movel"} className="text-[#f2f2f2b0] hover:text-[var(--text)] text-base transition-colors duration-300"> Móvel </Link>
            </li>

            <li>
              <Link href={"#"} className="text-[#f2f2f2b0] hover:text-[var(--text)] text-base transition-colors duration-300"> HDTV </Link>
            </li>

            <li>
              <Link href={"#"} className="text-[#f2f2f2b0] hover:text-[var(--text)] text-base transition-colors duration-300"> Wi-Fi </Link>
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
  );
}

