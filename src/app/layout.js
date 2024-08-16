import { Inter } from "next/font/google";
import "../components/card/cardComponent";
import "../components/sidebar/sidebarComponent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plataforma S2S Experience",
  description: "Criando a plataforma que unifica e ajuda",
};

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
