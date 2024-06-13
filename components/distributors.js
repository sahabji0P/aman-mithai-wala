




import doodle2 from '../public/doodle3.png'
import { useState } from 'react'
import { useEffect } from 'react'

import Link from 'next/link'

import Image from 'next/image'

import weddingBhaji from '@/public/weddingBhaji.jpg'

import khushiSweets from '@/public/ks.png'

import logo from '@/public/logo.png'

export default function Distributors() {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    const [popupContent, setPopupContent] = useState('');
    const [popupImage, setPopupImage] = useState('');

    // Define your products data directly in the file
    const products = [
        {
            id: 1,
            title: 'Jindutt Sweets',
            description: 'East Delhi',
            image: weddingBhaji,
        },
        {
            id: 2,
            title: 'Bansal Mithaiwala',
            description: 'North Delhi',
            image: weddingBhaji,
        },
        {
            id: 3,
            title: 'Ayu Sweets',
            description: 'South Delhi',
            image: weddingBhaji,
        },
        {
            id: 4,
            title: 'MG Petha Bhandar',
            description: 'Amritsar, Punjab',
            image: weddingBhaji,
        },
        // Add more products as needed
    ];


    const togglePopup = (content) => {
        setPopupContent(content);
        setShowPopup(!showPopup);
    };

    const togglePopup2 = (content, image) => {
        setPopupContent(content);
        setPopupImage(image);
        setShowPopup2(!showPopup2);
    };

    useEffect(() => {
        if (showPopup || showPopup2) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showPopup, showPopup2]);

    return (


        <div className="card w-full h-auto mb-1 bg-base-100 shadow-xl rounded-xl -z-0 image-full mt-1 flex flex-col overflow-x-hidden lg-h-auto">
            <section id="distributors">
            </section>
            <figure><Image src={doodle2} alt="Shoes" className='w-full' /></figure>

            <div className="card-body items-center justify-center h-auto">

                <h2 className='text-5xl font-bold text-center mb-10 card-title playfair_display md:text-6xl'>Our Partners & Distributors</h2>


                <div className='md:hidden'>
                    <div className="card w-80 bg-neutral mb-5 shadow-xl transition-transform duration-300 hover:scale-105">
                        <figure><Image src={logo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="badge badge-primary font-bold jakarta">Factory Outlet</div>


                            <h2 className="card-title">Aman Mithaiwala Pvt. Ltd.</h2>
                            <p className=''>M-19/A-6, M Block, Dilshad Garden, Delhi - 110095 </p>
                            <div className="card-actions justify-end">
                                <Link
                                    href="https://www.google.com/maps/dir//Aman+Mithaiwala+pvt.+Ltd,+M-19%2FA-6,+Block+J,+New+Simapuri,+Dilshad+Garden,+Delhi,+110095/@28.6850426,77.328326,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfbac08c80ea1:0x8fccc5f28700d00d!2m2!1d77.328326!2d28.6850426!3e0?entry=ttu"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                >
                                    <button className="btn btn-ascent">Get Directions</button>
                                </Link>


                                <Link
                                    href="https://wa.me/+919319674090"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                >
                                    <button className="btn btn-primary">Contact Us</button>
                                </Link>

                            </div>

                        </div>
                    </div>

                    <div className="card w-80 bg-neutral mb-5 shadow-xl transition-transform duration-300 hover:scale-105">
                        <figure><Image src={khushiSweets} alt="Movie" className='w-80 h-68' /></figure>
                        <div className="card-body">
                            <div className="badge badge-primary font-bold jakarta">Authorised Partner</div>

                            <h2 className="card-title">Khushi sweets</h2>
                            <p className=''> G-5, M.I.D.C, Ajanta Road Opposite Manraj Motors, N.H.6, Jalgaon - 425003</p>


                            <div className="card-actions justify-end">

                                <Link
                                    href="https://www.google.com/maps/dir//20.9835188,75.5898388/@20.9835188,75.5872639,17z/data=!4m2!4m1!3e0?entry=ttu"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                >
                                    <button className="btn btn-ascent">Get Directions</button>
                                </Link>

                                <Link
                                    href="https://wa.me/+919952701225"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                >
                                    <button className="btn btn-primary">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>





                </div>

                <div className='hidden md:block'>
                    <div className="card card-side bg-neutral mb-6 shadow-xl transition-transform duration-300 hover:scale-105">
                        <figure><Image src={logo} alt="Movie" className='w-80 h-68' /></figure>
                        <div className="card-body">
                            <div className="badge badge-primary font-bold jakarta">Factory Outlet</div>


                            <h2 className="card-title">Aman Mithaiwala Pvt. Ltd.</h2>
                            <p className='font-semibold'>M-19/A-6, M Block, Dilshad Garden, Delhi - 110095 </p>
                            <div className="card-actions justify-end">
                                <Link
                                    href="https://www.google.com/maps/dir//Aman+Mithaiwala+pvt.+Ltd,+M-19%2FA-6,+Block+J,+New+Simapuri,+Dilshad+Garden,+Delhi,+110095/@28.6850426,77.328326,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfbac08c80ea1:0x8fccc5f28700d00d!2m2!1d77.328326!2d28.6850426!3e0?entry=ttu"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                >
                                    <button className="btn btn-ascent">Get Directions</button>
                                </Link>

                                <Link
                                    href="https://wa.me/+919319674090"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                >
                                    <button className="btn btn-primary">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card card-side bg-neutral mb-6 shadow-xl transition-transform duration-300 hover:scale-105">
                        <figure><Image src={khushiSweets} alt="Movie" className='w-80 h-68' /></figure>
                        <div className="card-body">
                            <div className="badge badge-primary font-bold jakarta">Authorised Partner</div>

                            <h2 className="card-title">Khushi sweets</h2>
                            <p className='font-semibold'> G-5, M.I.D.C, Ajanta Road Opposite Manraj Motors, N.H.6, Jalgaon - 425003</p>
                            <div className="card-actions justify-end">
                                <Link
                                    href="https://www.google.com/maps/dir//20.9835188,75.5898388/@20.9835188,75.5872639,17z/data=!4m2!4m1!3e0?entry=ttu"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                >
                                    <button className="btn btn-ascent">Get Directions</button>
                                </Link>

                                <Link
                                    href="https://wa.me/+919952701225"
                                    rel="noreferrer"
                                    className="group transition duration-300 jakarta"
                                    target="_blank"
                                >
                                    <button className="btn btn-primary">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2'>

                    {/* md:flex-col space-y-4 */}

                    {products.map(product => (
                        <div key={product.id}>

                            < div className="card bg-neutral shadow-xl image-full w-full md:w-80 lg:w-80 xl:w-96 overflow-hidden transition-transform duration-300 hover:scale-105" >

                                {/* <figure><Image src={product.image} alt={product.title} className='w-full' /></figure> */}
                                <div className="card-body">
                                    <div className="badge badge-secondary font-bold jakarta">Distributor</div>

                                    <h2 className="card-title jakarta font-bold">{product.title}</h2>
                                    <p className='jakarta'>{product.description}</p>
                                    <div className="card-actions justify-end">
                                        {/* <button className="btn btn-primary jakarta font-bold" onClick={() => togglePopup(product.popupContent)}>Details</button> */}
                                    </div>
                                </div>
                            </ div>
                        </div>
                    ))}

                    {showPopup && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                            <div className="bg-white p-5 rounded-lg text-black animate-zoom fixed shadow-lg mx-8 md:mx-24">
                                <p className='jakarta'>{popupContent}</p>
                                <button className="btn btn-neutral mt-5 jakarta font-bold" onClick={() => togglePopup('')}>Close</button>
                            </div>
                        </div>
                    )}




                </div>


            </div >

        </div >

    );
}