import "./globals.css";

import { Inter } from "next/font/google";

import { Footer, Header } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: "/icons/favicon.ico",
  },
  title: "La Roma | Accueil",
  description: "#", // todo: ajouter la description du site
};

function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-white text-black antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex flex-col gap-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
