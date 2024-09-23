import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar/sidebarComponent.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alvaro Sales - Plataform",
  description: "Criando a plataforma que unifica e ajuda",
};

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <aside className="fixed m-0 z-50">
          <Sidebar />
        </aside>

        {children}
      </body>
    </html>
  );
}
