'use client'

import "./style.css"
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";


const SearchForm = () => {
    return(
        <>
            <form className="form">
                <label htmlFor="search" className="labelInput">

                    <input 
                        className="input outline-none outline-transparent" 
                        type="text" 
                        required
                        placeholder="Buscar..." 
                        id="search" />

                    <div className="fancy-bg"></div>

                    <div className="search">
                        <IoSearchOutline />
                    </div>
                    

                    <button className="close-btn" type="reset">
                        <IoCloseOutline />
                    </button>
                </label>
            </form>
        </>
    )
}

export default SearchForm

