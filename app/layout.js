import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/header/Navbar";
import AppCTA from "@/components/common/AppCTA";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy & Sell Cars in Pakistan - Get Your Ride Now.",
  description: "Proudly providing unusual Car Needs in Pakistan. Buy & Sell Cars. List Your Car Now and let the Ghosts Work.",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body  className={`${inter.className}`}>
      <Navbar/>
   
      {children}
      <AppCTA/>
      <Footer/>
      </body>
    </html>
  );
}
