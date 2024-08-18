"use client"
import "../../app/globals.css"


// Criando o componente para categorizar o card
const CategoriaExclusive = ({categoria}) => {
    return (
        <>
            <div className="w-[150px] bg-[var(--green)] mb-2 rounded-lg ml-[-30px]">

                {categoria && <p className="text-center text-base tracking-[1px] text-[var(--text)] p-1"> {categoria} </p>}
            </div>
        </>
    );
}


export default CategoriaExclusive
