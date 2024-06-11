
import doodle2 from '../public/doodle2.jpg'
import { useState } from 'react'
import { useEffect } from 'react'

import Image from 'next/image'
import weddingBhaji from '@/public/weddingBhaji.jpg'
import cc from '@/public/catalog.jpg'


export default function Products() {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    const [popupContent, setPopupContent] = useState('');
    const [popupImage, setPopupImage] = useState('');

    // Define your products data directly in the file
    const products = [
        {
            id: 1,
            title: 'Ladoos',
            description: 'Indian sweets made with love and care',
            image: weddingBhaji,
            popupContent: 'More details about product 1'
        },
        {
            id: 2,
            title: 'Bikaneri Barfi',
            description: 'Barfi made with the finest ingredients',
            image: weddingBhaji,
            popupContent: 'More details about product 2'
        },
        {
            id: 3,
            title: 'Wedding Bhaji',
            description: 'A traditional Indian gift for weddings and other special occasions',
            image: weddingBhaji,
            popupContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.`
        },
        // Add more products as needed
    ];

    const catalog = [
        {
            id: 1,
            popupContent: 'More details about the catalog',
            image: cc,
        },
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

        <div className="card w-full h-auto mb-1 bg-base-100 shadow-xl rounded-xl image-full mt-1 flex flex-col overflow-x-hidden lg-h-auto">
            <figure><Image src={doodle2} alt="Shoes" className='w-full' /></figure>

            <div className="card-body items-center justify-center h-auto">

                <h2 className='text-4xl font-bold text-center mb-10 card-title playfair_display md:text-5xl'>Products</h2>

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
                                        <button className="btn btn-primary jakarta font-bold" onClick={() => togglePopup(product.popupContent)}>Details</button>
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
                {catalog.map(product => (
                    <div key={product.id}>
                        <div className='card-actions justify-end mt-10'>
                            <button className="btn btn-primary jakarta font-bold" onClick={() => togglePopup2(product.popupContent, product.image)}>View Full Catalog</button>
                        </div >
                    </div>
                ))}

                {showPopup2 && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                        <div className="bg-white p-5 rounded-lg text-black animate-zoom fixed shadow-lg mt-28 mb-10 overflow-auto overflow-x-hidden mx-8 md:mx-24">
                            <p className='jakarta'>{popupContent}</p>
                            <Image src={popupImage} alt="Product" />
                            <button className="btn btn-neutral mt-5 jakarta font-bold" onClick={() => togglePopup2('')}>Close</button>
                        </div>
                    </div>
                )}



            </div >

        </div>

    );
}