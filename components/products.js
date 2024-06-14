
import doodle2 from '../public/doodle2.jpg'
import { useState } from 'react'
import { useEffect } from 'react'

import Image from 'next/image'
import weddingBhaji from '@/public/weddingBhaji.jpg'
import c1 from '@/public/catalog.jpg'
import c2 from '@/public/catalog1.jpg'
import c3 from '@/public/catalog3.jpg'

import rLadoos from '@/public/Products/ladoo.jpg'
import bikaneriBurfi from '@/public/Products/bikaneriBurfi.webp'
import kajuKatli from '@/public/Products/kk.jpg'
import doda from '@/public/Products/doda.jpg'


import Link from 'next/link'

import b1 from '@/public/Bhaji/1.jpg'
import b2 from '@/public/Bhaji/2.jpg'
import b3 from '@/public/Bhaji/3.jpg'
import b4 from '@/public/Bhaji/4.jpg'
import b5 from '@/public/Bhaji/5.jpg'
import b6 from '@/public/Bhaji/6.jpg'
import b7 from '@/public/Bhaji/7.jpg'
import b8 from '@/public/Bhaji/8.jpg'
import b9 from '@/public/Bhaji/9.jpg'
import group from '@/public/Bhaji/group.jpg'




export default function Products() {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);

    const [popupTitle, setPopupTitle] = useState('');
    const [popupDescription, setPopupDescription] = useState('');

    const [popupContent, setPopupContent] = useState('');
    const [popupImage, setPopupImage] = useState('');

    // Define your products data directly in the file
    const products = [
        {
            id: 1,
            title: 'Rajasthani Ladoo',
            description: 'Made with pure besan, refined, dry fruits and sugar',
            image: rLadoos,
            pimage: rLadoos,
            popupContent: 'More details about product 1'
        },
        {
            id: 2,
            title: 'Bikaneri Burfi',
            description: 'Roasted with pure milk solids, and sugar, and garnished with dry fruits',
            image: bikaneriBurfi,
            pimage: bikaneriBurfi,
            popupContent: 'More details about product 2'
        },
        {
            id: 3,
            title: 'Kaju Katli',
            description: 'Made with pure kaju, desi ghee, elaichi, varak and sugar',
            image: kajuKatli,
            pimage: kajuKatli,
            popupContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.`
        },
        {
            id: 4,
            title: 'Desi Ghee Doda Barfi',
            description: 'Made with desi ghee, milk solids, dry fruits, atta and sugar',
            image: doda,
            pimage: doda,
            popupContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.`
        },

        // Add more products as needed
    ];


    const togglePopup = (product) => {
        setPopupTitle(product.title);
        setPopupDescription(product.description);
        setPopupContent(product.popupContent);
        setPopupImage(product.pimage);
        setShowPopup(!showPopup);
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const catalogImages = [c1, c2, c3]; // Array of catalog images
    const bhajiImages = [b1, b2, b3, b4, b5, b6, b7, b8, b9]; // Array of bhaji images

    // ... (rest of the code remains the same) ...

    const togglePopup2 = () => {
        setShowPopup2(!showPopup2);
        setCurrentImageIndex(0); // Reset the image index when opening the popup
    };

    const togglePopup3 = () => {
        setShowPopup3(!showPopup3);
        setCurrentImageIndex(0); // Reset the image index when opening the popup
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + catalogImages.length) % catalogImages.length);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % catalogImages.length);
    };

    const handlePrevImage1 = () => {
        setCurrentImageIndex((currentImageIndex - 1 + bhajiImages.length) % bhajiImages.length);
    };

    const handleNextImage1 = () => {
        setCurrentImageIndex((currentImageIndex + 1) % bhajiImages.length);
    };

    useEffect(() => {
        if (showPopup || showPopup2 || showPopup3) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showPopup, showPopup2, showPopup3]);

    return (

        <div className="card w-full h-auto mb-1 bg-base-100 shadow-xl rounded-xl image-full mt-1 flex flex-col overflow-x-hidden lg-h-auto">
            <section id="products">

            </section>
            <figure><Image src={doodle2} alt="Shoes" className='w-full' /></figure>

            <div className="card-body items-center h-auto">

                <h2 className='text-4xl font-bold text-center mb-10 card-title playfair_display md:text-6xl'>Our Delicacy</h2>

                <div className='md:hidden'>
                    <div className="card w-80 bg-neutral mb-5 jakarta shadow-xl transition-transform duration-300 hover:scale-105">
                        <figure><Image src={group} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="badge badge-ghost font-bold jakarta">Various Options</div>
                            <h2 className="card-title jakarta">Wedding Bhaji</h2>
                            <p className='jakarta'> A traditional Indian gift for weddings and other special occasions </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-ascent" onClick={() => togglePopup3('')} > Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <div className="card card-side bg-neutral mb-6 shadow-xl jakarta transition-transform duration-300 hover:scale-105">
                        <figure><Image src={group} alt="Movie" className='w-80 h-68' /></figure>
                        <div className="card-body">
                            <div className="badge badge-ghost font-bold jakarta">Various Options</div>
                            <h2 className="card-title">Wedding Bhaji</h2>
                            <p className=''>  A traditional Indian gift for weddings and other special occasions </p>
                            <div className="card-actions justify-end">

                                <button className="btn btn-ascent" onClick={() => togglePopup3('')} > Details</button>


                            </div>
                        </div>
                    </div>
                </div>

                {showPopup3 && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                        <div className="bg-white p-5 rounded-lg text-black animate-zoom fixed shadow-lg mt-28 mb-10 overflow-auto c-size mx-4 md:mx-24">
                            <h1 className='font-bold text-3xl md:text-5xl text-left mb-5 jakarta'>Wedding Bhaji</h1>

                            <div className=''>
                                <div className="carousel w-full">
                                    <div id="slide1" className="carousel-item relative w-full">
                                        <Image src={bhajiImages[currentImageIndex]} className="w-size h-80 md:c-size" />

                                    </div>
                                </div>

                            </div>

                            <div className=" flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <button onClick={handlePrevImage1} className="btn btn-circle bg-neutral text-white">❮</button>
                                <button onClick={handleNextImage1} className="btn btn-circle bg-neutral text-white">❯</button>
                            </div>
                            <div className='flex flex-col w-fit md:w-full md:flex-row md:gap-2 justify-center'>
                                <Link
                                    href="https://wa.me/+918800614952"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                ><button className='btn btn-primary'>Contact Us for more details</button>
                                </Link>
                                <button button className="btn btn-neutral  mt-2 md:mt-0 jakarta font-bold" onClick={() => togglePopup3('')}>Close</button>

                            </div>
                        </div>
                    </div>
                )}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2'>

                    {products.map(product => (
                        <div key={product.id}>
                            < div className="card bg-base-100 shadow-xl image-full w-full md:w-80 lg:w-80 xl:w-96 overflow-hidden transition-transform duration-300 hover:scale-105" >
                                <figure><Image src={product.image} alt={product.title} className='w-full' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title jakarta font-bold">{product.title}</h2>
                                    <p className='jakarta'>{product.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary jakarta font-bold" onClick={() => togglePopup(product)}>Details</button>
                                    </div>
                                </div>
                            </ div>
                        </div>
                    ))}

                    {showPopup && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                            <div className="bg-white p-5 rounded-lg text-black animate-zoom z-50 overflow-auto c-size fixed shadow-lg mx-8 md:mx-24">

                                <h2 className=' jakarta font-bold mb-2 text-2xl text-center md:text-left md:ml-2'>{popupTitle}</h2>

                                <div className='md:flex'>
                                    <Image src={popupImage} alt={popupTitle} className='w-80 h-72 rounded-2xl shadow-lg mr-4' />
                                    <div >
                                        <p className='jakarta pr-4 text-left justify-between mt-5'>{popupDescription}</p>
                                        <Link
                                            href="https://wa.me/+918800614952"
                                            rel="noreferrer"
                                            className="group transition duration-300 jakarta"
                                            target="_blank"
                                        ><button className='btn btn-primary mt-5'>Contact Us for more details</button>
                                        </Link>
                                    </div>

                                </div>

                                <button className="btn btn-neutral mt-5 jakarta font-bold" onClick={() => togglePopup('')}>Close</button>
                            </div>
                        </div>
                    )}

                </div>

                <div className='card-actions justify-end mt-10'>
                    <button className="btn btn-primary jakarta font-bold" onClick={() => togglePopup2('')}>View Full Catalog</button>
                </div >

                {showPopup2 && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                        <div className="bg-white p-5 rounded-lg text-black animate-zoom fixed shadow-lg mt-28 mb-10 overflow-auto c-size mx-4 md:mx-24">
                            <h1 className='font-bold text-3xl md:text-5xl text-left mb-5 jakarta'>Catalog</h1>

                            <div className=''>
                                <div className="carousel w-full">
                                    <div id="slide1" className="carousel-item relative w-full">
                                        <Image src={catalogImages[currentImageIndex]} className="w-size c-size" />

                                    </div>
                                </div>

                            </div>

                            <div className=" flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <button onClick={handlePrevImage} className="btn btn-circle bg-neutral text-white">❮</button>
                                <button onClick={handleNextImage} className="btn btn-circle bg-neutral text-white">❯</button>
                            </div>
                            <div className='flex flex-col w-fit md:w-full md:flex-row md:gap-2 justify-center'>
                                <Link
                                    href="https://wa.me/+918800614952"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                ><button className='btn btn-primary'>Contact Us for more details</button>
                                </Link>
                                <button button className="btn btn-neutral  mt-2 md:mt-0 jakarta font-bold" onClick={() => togglePopup2('')}>Close</button>

                            </div>
                        </div>
                    </div>
                )}


            </div >

        </div >

    );
}