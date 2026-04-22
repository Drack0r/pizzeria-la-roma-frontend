import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "La Roma | Accueil",
  description: "#", // todo: ajouter la description du site
};

function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} bg-white text-black antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
