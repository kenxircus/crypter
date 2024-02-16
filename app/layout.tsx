import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  Box,
  ChakraProvider,
  ColorModeScript,
  DarkMode,
} from "@chakra-ui/react";
import Navbar from "./components/shared/Navbar";
import { Providers } from "./providers";
import theme from "./theme";
import Footer from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypter Cloney",
  description: "Crypter is a Bidding NFT Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <DarkMode>
            <Navbar />
            {children}
            <Footer />
          </DarkMode>
        </Providers>
      </body>
    </html>
  );
}
