import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.className} antialised`}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
