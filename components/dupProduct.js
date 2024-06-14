"use client";


import doodle2 from '../public/doodle2.jpg'
import { useState } from 'react'
import { useEffect } from 'react'

import Image from 'next/image'
import weddingBhaji from '@/public/weddingBhaji.jpg'


import c1 from '@/public/catalog.jpg'
import c2 from '@/public/catalog1.jpg'
import c3 from '@/public/catalog3.jpg'

import rLadoos from '@/public/Products/ladoo.jpg'
import bikaneriBurfi from '@/public/Products/bikaneriBurfi.jpg'
import kajuKatli from '@/public/Products/kk.jpg'
import doda from '@/public/Products/doda.jpg'


import Link from 'next/link'

import b2 from '@/public/Bhaji/2.jpg'




export default function Duplicate() {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    const [popupTitle, setPopupTitle] = useState('');
    const [popupDescription, setPopupDescription] = useState('');

    const [popupContent, setPopupContent] = useState('');
    const [popupImage, setPopupImage] = useState('');
    const [popupImage1, setPopupImage1] = useState('');
    const [popupImage2, setPopupImage2] = useState('');


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
        {
            id: 5,
            title: 'Wedding Bhaji',
            description: 'A traditional Indian gift for weddings and other special occasions',
            image: weddingBhaji,
            pimage: b2,
            popupContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.`
        },
        // Add more products as needed
    ];

    const togglePopup = () => {
        setPopupImage(c1);
        setPopupImage1(c2);
        setPopupImage2(c3);
    };
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const catalogImages = [c1, c2, c3]; // Array of catalog images

    // ... (rest of the code remains the same) ...

    const togglePopup2 = () => {
        setShowPopup2(!showPopup2);
        setCurrentImageIndex(0); // Reset the image index when opening the popup
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + catalogImages.length) % catalogImages.length);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % catalogImages.length);
    };


    useEffect(() => {
        if (showPopup || showPopup2) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showPopup, showPopup2]);

    return (

        <div className="card w-full h-auto mb-1 bg-base-100 shadow-xl rounded-xl image-full mt-1 flex flex-col overflow-x-hidden lg-h-auto">
            <section id="products">

            </section>
            <figure><Image src={doodle2} alt="Shoes" className='w-full' /></figure>

            <div className="card-body items-center justify-center h-auto">

                <h2 className='text-4xl font-bold text-center mb-10 card-title playfair_display md:text-6xl'>Our Delicacy</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2'>

                    {/* md:flex-col space-y-4 */}

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
                        <div className="bg-white p-5 rounded-lg text-black animate-zoom fixed shadow-lg mt-28 mb-10 overflow-auto c-size mx-8 md:mx-24">
                            <h1 className='font-bold text-3xl md:text-5xl text-left mb-5 jakarta'>Catalog</h1>

                            <div className='mx-2'>
                                <div className="carousel w-full">
                                    <div id="slide1" className="carousel-item relative w-full">
                                        <Image src={catalogImages[currentImageIndex]} className="w-80 h-72 rounded-2xl shadow-lg mr-4" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <button onClick={handlePrevImage} className="btn btn-circle">❮</button>
                                            <button onClick={handleNextImage} className="btn btn-circle">❯</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button button className="btn btn-neutral mt-5 jakarta font-bold" onClick={() => togglePopup2('')}>Close</button>
                        </div>
                    </div>
                )}






            </div >

        </div >

    );
}