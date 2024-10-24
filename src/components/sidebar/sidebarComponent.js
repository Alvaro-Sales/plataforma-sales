'use client'
import Link from 'next/link'
import Image from 'next/image'
import "../../app/globals.css"
import { MdOutline5G } from "react-icons/md"
import { IoHomeOutline } from "react-icons/io5"
// import { HiOutlineTv, HiOutlineWifi } from "react-icons/hi2"


//Aqui vou criar o componente Sidebar
export default function Sidebar(){
    return (
        <>
            <nav className='navigation relative w-[70px] min-w-[70px] h-[100vh] bg-[var(--black-mod)] overflow-hidden hover:w-[200px] border-r-2 border-[var(--green)]'>

                <div className='flex items-center justify-start w-[200px] h-[auto] absolute top-12 left-0'>

                    <Image 
                        src="/images/logo.svg"
                        width={45}
                        height={45}
                        alt="Logotipo"
                        priority="true"
                        className="ml-[15px]"
					/>

                    <span className='logo text-[var(--text)] text-xl relative block pl-3'>Álvaro Sales</span>
                </div>

                <ul className='list w-full h-full flex flex-col absolute list-none top-[150px] left-0'>

                    <li className='itemList relative mb-[15px] ml-[5px]'>

                        <Link href="/" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[var(--green)]'>

                            <IoHomeOutline className='iconMenu text-[var(--text)] min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-[var(--text)] relative block pl-5 whitespace-nowrap'>
                                Home
                            </span>
                        </Link>
                    </li>

                    <li className='itemList relative mb-[15px] ml-[5px]'>

                        <Link href="../movel" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[var(--green)]'>

                            <MdOutline5G className='iconMenu text-[var(--text)] min-w-[30px] min-h-[30px] relative block ml-[5px]'/>

                            <span className='text-[var(--text)] relative block pl-5 whitespace-nowrap'>
                                Móvel
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

