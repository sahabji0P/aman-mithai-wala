import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";



import "./globals.css";
import Navbar from "@/components/navbar";

// const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: '500', variable: '--font-playfair_display' });
const jakarta = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

export const metadata = {
  title: "Aman Mithaiwala Pvt. Ltd.",
  description: "Authentic Traditional Sweets",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jakarta.variable}`}>


        {/* <nav className="navbar bg-base-100 z-50 shadow-xl fixed w-full">

          <div className="flex item-center justify-between h-full w-full px-4 2xl:px-16">
            <div>
              Right
            </div>

            <div>
              Left
            </div>
          </div>

        </nav> */}

        <Navbar />

        {children}

      </body>
    </html >
  );
}
