'use client'
import "../../app/globals.css"
import { IoSearchOutline } from "react-icons/io5"



const SearchForm = () => {
    return(
        <>
            <form className="flex items-center w-[300px] isolate relative text-sm gap-2">

                <label 
                    htmlFor="search" 
                    className="labelInput w-full h-10 flex items-center p-[0.8em] pe-[1.5em] ps-[1.5em]">

                    <input 
                        className="input outline-none outline-transparent text-[var(--text)] w-full bg-transparent border-none focus:outline-none focus:border-none placeholder:text-[#aeb2b6]" 
                        type="text" 
                        required
                        placeholder="Pesquisar..."
                        id="search" />

                    <div className="fancy-bg absolute w-full h-full inset-0 bg-[var(--black-mod)] rounded-[30px] z-[-1] pointer-events-none"></div>

                    <div className="search absolute text-[var(--text)] text-[1.2em] fill-[#aeb2b6] left-[1.2em]">
                        <IoSearchOutline />
                    </div>
                </label>
            </form>
        </>
    )
}

export default SearchForm

