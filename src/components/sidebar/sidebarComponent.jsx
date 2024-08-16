'use client'

import "/dev-lab/appExperience/plataformas2s/src/app/globals.css"
import Link from 'next/link'
import "./style.css"
import { useEffect } from "react"
import { MdOutline5G } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5"; 
import { HiOutlineTv, HiOutlineWifi } from "react-icons/hi2";


//Aqui vou criar o componente Sidebar
export default function Sidebar(){
    return (
        <>
            <nav className='navigation relative w-[70px] min-w-[70px] h-[100vh] bg-[var(--black-mod)] overflow-hidden hover:w-[200px]'>

                <div className='flex items-center justify-start w-[200px] h-[auto] absolute top-12 left-0'>

                    <TbBrandNextjs className='iconMenu text-white min-w-[45px] min-h-[45px] relative block ml-[15px]' />

                    <span className='text-white relative block pl-3'>Logotipo</span>
                </div>

                <ul className='list w-full h-full flex flex-col absolute list-none top-[150px] left-0'>

                    <li className='itemList relative mb-[15px] ml-[5px]'>

                        <Link href="/" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[#0080ff]'>

                            <IoHomeOutline className='iconMenu text-white min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-white relative block pl-5 whitespace-nowrap'>
                                Home
                            </span>
                        </Link>
                    </li>

                    <li className='itemList relative mb-[15px] ml-[5px]'>

                        <Link href="../movel" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[#0080ff]'>

                            <MdOutline5G className='iconMenu text-white min-w-[30px] min-h-[30px] relative block ml-[5px]'/>

                            <span className='text-white relative block pl-5 whitespace-nowrap'>
                                Móvel
                            </span>
                        </Link>
                    </li>

                    <li className='itemList relative mb-[15px] ml-[5px]'>

                        <Link href="../hdtv" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[#0080ff]'>

                            <HiOutlineTv className='iconMenu text-white min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-white relative block pl-5 whitespace-nowrap'>
                                HDTV
                            </span>
                        </Link>
                    </li>

                    <li className='itemList relative mb-[15px] ml-[5px]'>

                        <Link href="../wifi" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[#0080ff]'>

                            <HiOutlineWifi className='iconMenu text-white min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-white relative block pl-5 whitespace-nowrap'>
                                Wi-Fi
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}


// Criando função para verificar qual link está ativo para aplicar efeito de selecionado no menu

const checkActive = () => {
    useEffect(() => {
        const list = document.querySelectorAll('.itemList')

        function activeLink() {
            list.forEach((item) => item.classList.remove('active'))
            this.classList.add('active')
        }

        list.forEach((item) => item.addEventListener('click', activeLink))

        return () => {
            list.forEach((item) => item.removeEventListener('click', activeLink))
        }
    }, [])
}

