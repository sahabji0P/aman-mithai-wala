'use client'

import { useState } from 'react'
import Image from 'next/image'
import weddingBhaji from '@/public/weddingBhaji.jpg'

export default function Card() {
    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <div className='p-16 flex flex-col w-full'>
            <section id="products">
                <h1 className='text-4xl font-bold text-center'>Products</h1>
            </section>

            <div className='flex mt-5 space-x-4'>
                <div className="relative z-10">
                    {/* Card 1 */}

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
                                <h2 className="text-xl font-boldw mb-4">What makes us different</h2>
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
                </div>

                <div className="relative z-10">
                    {/* Card 2 */}

                    <div className="card w-96 bg-base-100 shadow-xl image-full overflow-hidden transition-transform duration-300 hover:scale-105">
                        <figure><Image src={weddingBhaji} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Wedding Bhaji!</h2>
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
                                <h2 className="text-xl font-bold mb-4">What makes us different</h2>
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
                </div>
            </div>
        </div >
    )
}