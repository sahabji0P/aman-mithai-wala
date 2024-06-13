// // "use client";

// // import Image from "next/image";
// // import logo from "../public/logo.png";
// // import InstagramIcon from '@mui/icons-material/Instagram';
// // import FacebookIcon from '@mui/icons-material/Facebook';
// // import PhoneIcon from '@mui/icons-material/Phone';

// // import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// // import { HiMenuAlt1 } from "react-icons/hi";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";


// // export default function Navbar() {
// //     const [menuOpen, setMenuOpen] = useState(false);

// //     const handleNav = () => {
// //         setMenuOpen(!menuOpen);


// //     }



// //     return (



// //         <nav className=" bg-base-100 z-50 shadow-xl fixed w-full h-24">

// //             <div className="flex item-center justify-between h-full w-full px-4 2xl:px-16">



// //                 <Link href="/">
// //                     <Image
// //                         className="p-2 ml-8 cursor-pointer"
// //                         src={logo}
// //                         alt="logo"
// //                         width={160}
// //                         height={100}
// //                     />
// //                 </Link>



// //                 <div className="hidden items-center md:flex">
// //                     <ul className="menu menu-horizontal text-base px-1 hidden md:flex">
// //                         <li ><a href="#vision">Vision</a></li>
// //                         <li><a href="#reach">Reach</a></li>
// //                         <li><a href="#products">Products</a></li>
// //                         <li><Link href="#Aboutus" offset={-160}>About Us</Link></li>
// //                         <li>
// //                             <Link
// //                                 href='#contact'
// //                                 duration={500}
// //                                 offset={-160}

//                                 className="group transition duration-300 hover:cursor-pointer"
// //                             >
// //                                 Contact Us
// //                             </Link>

// //                         </li>
// //                     </ul>
// //                 </div>

// //                 <div className="p-2 items-center hidden md:flex mr-5">
// //                     <div className="flex items-center space-x-4 btn">

// //                         <InstagramIcon />
// //                         <FacebookIcon />
// //                         <PhoneIcon />
// //                     </div>
// //                 </div>

// //                 <div className="md:hidden cursor-pointer mt-8 mr-4" onClick={handleNav}>
// //                     <HiMenuAlt1 size={30} />
// //                 </div>
// //             </div>

// //             <div className={
// //                 menuOpen
// //                     ? "fixed left-0 top-0 w-[75%] h-screen bg-base-100 z-50 shadow-xl p-10 ease-in duration-300 lg:hidden"
// //                     : "fixed left-[-100%] top-0 p-10 ease-in-out duration-300"
// //             }>

// //                 <div className="flex justify-end items-center w-full ">
// //                     <div className="cursor-pointer" onClick={handleNav}>
// //                         <AiOutlineClose size={25} />
// //                     </div>
// //                 </div>

// //                 <div className="flex-col py-4">
// //                     <ul className="menu menu-vertical py-5 text-xl font-semibold">
// //                         <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#vision">Vision</a></li>
// //                         <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#reach">Reach</a></li>
// //                         <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#products">Products</a></li>
// //                         <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#about-us">About Us</a></li>
// //                         <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#contact-us">Contact Us</a></li>
// //                     </ul>
// //                 </div>

// //                 <div>
// //                     <div className="flex-row justify-around space-x-8 ml-10 item-center">

// //                         <InstagramIcon />
// //                         <FacebookIcon />
// //                         <PhoneIcon />
// //                     </div>
// //                 </div>

// //             </div>


// //         </nav>
// //     );
// // }

"use client";

import Image from "next/image";
import logo from "../public/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import { Mail, WhatsApp } from "@mui/icons-material";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

import { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);

    let lastScrollY = 0;

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // scroll down
                setShowNav(false);
            } else {
                // scroll up
                setShowNav(true);
            }
            lastScrollY = window.scrollY;
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, []);

    return (
        <nav className={`bg-base-100 z-50 shadow-xl fixed w-full h-24 transition-transform duration-500 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex item-center justify-between h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image
                        className="p-2 ml-8 cursor-pointer"
                        src={logo}
                        alt="logo"
                        width={160}
                        height={100}
                    />
                </Link>

                <div className="hidden items-center md:flex">
                    <ul className="menu menu-horizontal text-base px-1 hidden md:flex jakarta font-semibold">
                        {/* <li><a href="/">Home</a></li> */}
                        {/* <li><a href="#vision">Vision</a></li> */}
                        <li><a href="#difference">Our Edge</a></li>
                        <li><a href="#products">Our Delicacy</a></li>
                        <li><a href="#distributors">Distributors</a></li>

                        <li><Link href="#about-us" offset={-160}>About Us</Link></li>
                        <li><a href="#reach">Our Reach</a></li>
                        <li>
                            <Link
                                href='#contact'
                                duration={500}
                                offset={-160}
                                className="group transition duration-300 hover:cursor-pointer"
                            >

                                Contact Us
                            </Link>

                        </li>

                    </ul>
                </div>

                <div className="p-2 items-center hidden md:flex mr-5">
                    <div className="flex items-center space-x-4">
                        <Link href="https://www.instagram.com/aman_mithaiwala?igsh=NDlzOHhlMW5majc=" target="_blank"><InstagramIcon /></Link>
                        <Link href="https://www.facebook.com/profile.php?id=100089763180304&mibextid=ZbWKwL" target="_blank"><FacebookIcon /></Link>
                        <Link href="https://wa.me/+918800614952" target="_blank"><WhatsApp /></Link>
                        <Link href="mailto: sales@amanmithaiwala.com" target="_blank"><Mail /></Link>
                    </div>
                </div>

                <div className="md:hidden cursor-pointer mt-8 mr-4" onClick={handleNav}>
                    <HiMenuAlt1 size={30} />
                </div>
            </div>

            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[75%] h-screen bg-base-100 z-50 shadow-xl p-10 ease-in duration-300 lg:hidden"
                    : "fixed left-[-100%] top-0 p-10 ease-in-out duration-300"
            }>
                <div className="flex justify-end items-center w-full ">
                    <div className="cursor-pointer" onClick={handleNav}>
                        <AiOutlineClose size={25} />
                    </div>
                </div>

                <div className="flex-col py-4">
                    <ul className="menu menu-vertical py-5 text-xl jakarta font-semibold">
                        {/* <li onClick={() => setMenuOpen(false)} className="py-4"><a href="/">Home</a></li> */}
                        {/* <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#vision">Vision</a></li> */}
                        <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#difference">Our Edge</a></li>
                        <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#products">Our Delicacy</a></li>
                        <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#distributors">Distributors</a></li>
                        <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#about-us">About Us</a></li>
                        <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#reach">Our Reach</a></li>
                        <li onClick={() => setMenuOpen(false)} className="py-4"><a href="#contact">Contact Us</a></li>

                    </ul>
                </div>

                <div>
                    <div className="flex-row justify-around space-x-8 ml-5 item-center">
                        <Link href="https://www.instagram.com/aman_mithaiwala?igsh=NDlzOHhlMW5majc=" target="_blank"><InstagramIcon /></Link>
                        <Link href="https://www.facebook.com/profile.php?id=100089763180304&mibextid=ZbWKwL" target="_blank"><FacebookIcon /></Link>
                        <Link href="https://wa.me/+918800614952" target="_blank"><WhatsApp /></Link>
                        <Link href="mailto: sales@amanmithaiwala.com" target="_blank"><Mail /></Link>

                    </div>
                </div>
            </div>
        </nav >
    );
}