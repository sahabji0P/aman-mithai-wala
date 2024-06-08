import { useEffect, useState } from 'react';

export default function Products() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    // Define your products data directly in the file
    const products = [
        {
            id: 1,
            title: 'Product 1',
            description: 'This is product 1',
            image: 'https://via.placeholder.com/150',
            popupContent: 'More details about product 1'
        },
        {
            id: 2,
            title: 'Product 2',
            description: 'This is product 2',
            image: 'https://via.placeholder.com/150',
            popupContent: 'More details about product 2'
        },
        {
            id: 3,
            title: 'Product 3',
            description: 'This is product 3',
            image: 'https://via.placeholder.com/150',
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
        <div className='p-12 flex flex-col w-full mt-36 bg-gray-500 border-t-2 border-black dark:border-neutral-800 py-12'>
            <section id="products">
                <h1 className='text-4xl font-bold mb-5 text-center'>Products</h1>
            </section>
            <div className='flex mt-5 space-x-4'>

                {products.map(product => (
                    <div key={product.id} className="relative z-10">
                        <div className="card w-96 bg-base-100 shadow-xl image-full overflow-hidden transition-transform duration-300 hover:scale-105">
                            <figure><img src={product.image} alt={product.title} /></figure>
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
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-lg animate-zoom fixed shadow-lg mx-24">
                        <p>{popupContent}</p>
                        <button className="btn btn-primary mt-5" onClick={() => togglePopup('')}>Close</button>
                    </div>
                </div>
            )}

        </div>
    );
}