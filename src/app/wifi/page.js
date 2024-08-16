import Image from "next/image";
import "./style.css"
import Sidebar from "../../components/sidebar/sidebarComponent"

export default function Wifi(){
    return(
        <>
            <div className="flex items-center">
                <aside>
                    <Sidebar />
                </aside>

                <main className="h-full w-full">
                    <section className="flex flex-col justify-center items-center max-w-full">
                        <h1 className="mb-24 text-white text-5xl">
                            WI-FI Page
                        </h1>

                        <figure>
                            <Image 
                                width={300}
                                height={377}
                                src="/images/signal-searching.svg"
                                alt="Imagem ilustrativa do WI-FI"
                            />
                        </figure>
                    </section>
                </main>
            </div>
        </>
    );
}
