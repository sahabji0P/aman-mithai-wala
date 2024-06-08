import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "../public/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';

import doodle from "../public/doodle.jpeg";

import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aman Mithai Wala",
  description: "Authentic Traditional Sweets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="navbar bg-base-100 z-20 fixed">
          <div className="navbar-start">

            <Link href="/">
              <Image
                className="p-2 ml-8"
                src={logo}
                alt="logo"
                width={160}
                height={100}
              />
            </Link>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Vision</a></li>
              <li><a>Reach</a></li>
              <li><a>Products</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
          <div className="navbar-end p-2 mr-5">
            <div className="flex items-center space-x-4 btn">

              <InstagramIcon />
              <FacebookIcon />
              <PhoneIcon />
            </div>


          </div>
        </div>
        {children}

      </body>
    </html>
  );
}
