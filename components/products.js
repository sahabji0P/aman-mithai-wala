import { useState } from 'react';
import Card from './card';

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
                    {/* <div className="card w-96 bg-base-100 shadow-xl image-full ">
                        <figure><img src="https://as1.ftcdn.net/v2/jpg/02/46/31/00/1000_F_246310098_v6gBGMpR1upxO03g7awJlB0ayYhfkL5V.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Ladoo!</h2>
                            <p>If a man chews ladoos, whose ladoos does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div> */}

                    <Card />
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