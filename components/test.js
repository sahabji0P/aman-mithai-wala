
import doodle2 from '../public/doodle2.jpg'
import { useState } from 'react'

import Image from 'next/image'
import weddingBhaji from '@/public/weddingBhaji.jpg'


export default function Test() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    // Define your products data directly in the file
    const products = [
        {
            id: 1,
            title: 'Product 1',
            description: 'This is product 1',
            image: weddingBhaji,
            popupContent: 'More details about product 1'
        },
        {
            id: 2,
            title: 'Product 2',
            description: 'This is product 2',
            image: weddingBhaji,
            popupContent: 'More details about product 2'
        },
        {
            id: 3,
            title: 'Product 3',
            description: 'This is product 3',
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

        <div className="items-center justify-center flex flex-col border-y-2 mt-32 ">


            <div className="card w-full h-96 mb-10 bg-base-100 shadow-xl rounded-none image-full">
                <figure><Image src={doodle2} alt="Shoes" className='w-full' /></figure>
                <div className="card-body items-center">

                    <h2 className='text-4xl font-bold text-center mb-5 card-title'>Products</h2>

                    <div className='flex mt-5 space-x-4'>

                        {products.map(product => (
                            <div key={product.id} className="relative z-10">
                                <div className="card w-96 bg-base-100 shadow-xl image-full overflow-hidden transition-transform duration-300 hover:scale-105">
                                    <figure><Image src={product.image} alt={product.title} className='w-full' /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{product.title}</h2>
                                        <p>{product.description}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary" onClick={() => togglePopup(product.popupContent)}>Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {showPopup && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                                <div className="bg-white p-5 rounded-lg text-black animate-zoom fixed shadow-lg mx-24">
                                    <p>{popupContent}</p>
                                    <button className="btn btn-primary mt-5" onClick={() => togglePopup('')}>Close</button>
                                </div>
                            </div>
                        )}

                        {/* <div className="relative z-10">
                            <div className="card w-96 bg-base-100 shadow-xl image-full overflow-hidden transition-transform duration-300 hover:scale-105">
                                <figure><img src="https://as1.ftcdn.net/v2/jpg/02/46/31/00/1000_F_246310098_v6gBGMpR1upxO03g7awJlB0ayYhfkL5V.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Ladoo!</h2>
                                    <p>If a man chews ladoos, whose ladoos does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={togglePopup}>Details</button>
                                    </div>
                                </div>
                            </div>

                            {showPopup && (
                                <>
                                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-30"></div>
                                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-40 animate-zoom">
                                        <h2 className="text-xl font-bold mb-4">Special Ladoos</h2>
                                        <p className="text-gray-600 mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                            onClick={togglePopup}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </>
                            )}
                        </div> */}

                    </div>


                </div>
            </div>

        </div >


    );
}