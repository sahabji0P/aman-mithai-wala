import { Inter } from "next/font/google";



import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aman Mithaiwala Pvt. Ltd.",
  description: "Authentic Traditional Sweets",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>


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
    </html>
  );
}
