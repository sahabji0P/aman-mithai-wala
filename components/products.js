import { useState } from 'react';

export default function Products() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (

        <main className='p-16'>
            <h1 className='text-4xl font-bold text-center'>Products</h1>
            <div role="tablist" className="tabs tabs-lifted">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Tab 1"
                    checked={activeTab === 0}
                    onClick={() => handleTabClick(0)}
                />
                <div
                    role="tabpanel"
                    className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 0 ? 'block' : 'hidden'
                        }`}
                >
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Tab 2"
                    checked={activeTab === 1}
                    onClick={() => handleTabClick(1)}
                />
                <div
                    role="tabpanel"
                    className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 1 ? 'block' : 'hidden'
                        }`}
                >
                    Tab content 2
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Tab 3"
                    checked={activeTab === 2}
                    onClick={() => handleTabClick(2)}
                />
                <div
                    role="tabpanel"
                    className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 2 ? 'block' : 'hidden'
                        }`}
                >
                    Tab content 3
                </div>
            </div>
        </main>
    );
}