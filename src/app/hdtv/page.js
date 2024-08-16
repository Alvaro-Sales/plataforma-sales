import Image from "next/image";
import "./style.css"
import Sidebar from "../../components/sidebar/sidebarComponent"

export default function HDTV(){
    return(
        <>
            <div className="flex items-center">
                <aside>
                    <Sidebar />
                </aside>

                <main className="h-full w-full">
                    <section className="flex flex-col justify-center items-center">
                        <h1 className="mb-24 text-white text-5xl">
                            HDTV Page
                        </h1>

                        <figure>
                            <Image 
                                width={500}
                                height={360}
                                src="/images/monitor.svg"
                                alt="Imagem ilustrativa do móvel"
                            />
                        </figure>
                    </section>
                </main>
            </div>
        </>
    );
}
