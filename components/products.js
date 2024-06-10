
import doodle2 from '../public/doodle2.jpg'
import { useState } from 'react'

import Image from 'next/image'
import weddingBhaji from '@/public/weddingBhaji.jpg'


export default function Products() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');

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

    const togglePopup = (content) => {
        setPopupContent(content);
        setShowPopup(!showPopup);
    };

    return (

        <div className="card w-full h-auto mb-10 bg-base-100 shadow-xl rounded-none image-full mt-1 flex flex-col overflow-x-hidden xl:h-96 lg:h-96">
            <figure><Image src={doodle2} alt="Shoes" className='w-full' /></figure>

            <div className="card-body items-center h-auto">

                <h2 className='text-4xl font-bold text-center mb-2 card-title'>Products</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2'>

                    {/* md:flex-col space-y-4 */}

                    {products.map(product => (
                        <div key={product.id}>
                            < div className="card bg-base-100 shadow-xl image-full w-full md:w-80 lg:w-80 xl:w-96 overflow-hidden transition-transform duration-300 hover:scale-105" >
                                <figure><Image src={product.image} alt={product.title} className='w-full' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.title}</h2>
                                    <p>{product.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={() => togglePopup(product.popupContent)}>Details</button>
                                    </div>
                                </div>
                            </ div>
                        </div>
                    ))}

                    {showPopup && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                            <div className="bg-white p-5 rounded-lg text-black animate-zoom fixed shadow-lg mx-8 md:mx-24">
                                <p>{popupContent}</p>
                                <button className="btn btn-primary mt-5" onClick={() => togglePopup('')}>Close</button>
                            </div>
                        </div>
                    )}


                </div>


            </div >
        </div >

    );
}