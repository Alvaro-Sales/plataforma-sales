'use client'

import Image from "next/image"
import "../../app/globals.css"

// Criando o slide da Home page
export default function Slide() {
    return (
        <>
			<div className="overflow-hidden w-[1900px] max-w-full max-h-[400px] mb-12">
				<div className="sliderContent w-[400%] max-h-full flex">

					{/* Aqui estão os inputs de navegação do slide */}
					<input type="radio" name="btn-radio" id="radio1" className="hidden" defaultChecked/>

					<input type="radio" name="btn-radio" id="radio2" className="hidden" />
					
					<input type="radio" name="btn-radio" id="radio3" className="hidden" />

					{/* Aqui estão as imagens do slide */}
					<div className="w-[25%] h-[400px] relative text-center defaultSlide">
						<Image 
							src="/images/paisagem-1.jpg"
							width={1900}
							height={400}
							alt="Imagem 1 do slide"
							priority="true"
							className="max-w-full h-full object-cover object-center"
						/>
					</div>

					<div className="w-[25%] h-[400px] relative text-center">
						<Image 
							src="/images/paisagem-2.jpg"
							width={1900}
							height={400}
							alt="Imagem 2 do slide"
							priority="true"
							className="max-w-full h-full object-cover object-center"
						/>
					</div>

					<div className="w-[25%] h-[400px] relative text-center">
						<Image 
							src="/images/paisagem-3.jpg"
							width={1900}
							height={400}
							alt="Imagem 3 do slide"
							priority="true"
							className="max-w-full h-full object-cover object-center"
						/>
					</div>
				
					{/* Essa é a navegação automática dentre as imagens */}
					<div className="navAuto">

						<div 
							className="autoBtn1 p-2 cursor-pointer rounded-[50%}">
						</div>

						<div 
							className="autoBtn2 p-2 cursor-pointer rounded-[50%]">
						</div>

						<div 
							className="autoBtn3 p-2 cursor-pointer rounded-[50%]">
						</div>
					</div>

					{/* Essa é a navegação manual (com click) dentre as imagens */}
					<div className="navManual max-w-[1700px] mt-[410px] flex absolute justify-center">

						<label htmlFor="radio1" className="manualBtn p-[10px] cursor-pointer rounded-full hover:bg-[var(--green)] outline outline-1 outline-[var(--green)]"></label>

						<label htmlFor="radio2" className="manualBtn p-[10px] cursor-pointer rounded-full hover:bg-[var(--green)] outline outline-1 outline-[var(--green)]"></label>

						<label htmlFor="radio3" className="manualBtn p-[10px] cursor-pointer rounded-full hover:bg-[var(--green)] outline outline-1 outline-[var(--green)]"></label>
					</div>
				</div>
			</div>
        </>
    )
}
