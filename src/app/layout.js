import "./globals.css";
import { Inter } from "next/font/google"
import Footer from "../components/footer/footer"
import { Analytics } from '@vercel/analytics/react'
import Sidebar from "../components/sidebar/sidebarComponent"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alvaro Sales - Plataform",
  description: "Criando a plataforma que unifica e ajuda",
};

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {/* Usando o menu lateral */}
        <aside className="fixed m-0 z-50">
          <Sidebar />
        </aside>

        {/* Usando o conteúdo do site */}
        {children}

        {/* Usando o footer component */}
        <Footer />

        {/* Usando o Analytics do Vercel */}
        <Analytics />
      </body>
    </html>
  );
}
