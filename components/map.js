
import Image from 'next/image';
import reach from '@/public/reach.jpeg';

import React, { useState } from 'react';

export default function Map() {

    const [showDialog, setShowDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState('');

    const handleMouseEnter = (city) => {
        setDialogContent(`Additional info about ${city}`);
        setShowDialog(true);
    };

    const handleMouseLeave = () => {
        setShowDialog(false);
    };
    return (



        <div className="card relative w-full bg-base-100 image-full overflow-hidden rounded-none mt-10">
            <figure><Image
                src={reach}
                alt="Doodle"
                className="w-full"

            /></figure>

            {/* sm:ml-delhi-sm-l sm:mt-delhi-sm-t */}

            {/* ml-delhi-l mt-delhi-t */}

            <div className="card-body absolute mt-delhi-sm-t ml-delhi-sm-l md:mt-delhi-t md:ml-delhi-l lg:mt-delhi-lg-t lg:ml-delhi-lg-l xl:mt-delhi-xl-t xl:ml-delhi-xl-l w-auto">
                {/* <p >Delhi</p> */}
                <p onMouseEnter={() => handleMouseEnter('Delhi')} onMouseLeave={handleMouseLeave} className=' hover:text-red-700 w-auto'>Delhi</p>

            </div>

            {/* ml-hyderabad-l mt-hyderabad-t */}

            <div className="card-body absolute mt-hyderabad-sm-t ml-hyderabad-sm-l md:mt-hyderabad-t md:ml-hyderabad-l lg:mt-hyderabad-lg-t lg:ml-hyderabad-lg-l xl:mt-hyderabad-xl-t xl:ml-hyderabad-xl-l w-auto">
                <p onMouseEnter={() => handleMouseEnter('Hyderabad')} onMouseLeave={handleMouseLeave}>Hyderabad</p>
            </div>

            {showDialog && (
                <div className="dialog-box">
                    {dialogContent}
                </div>
            )}


        </div>

    );
}

