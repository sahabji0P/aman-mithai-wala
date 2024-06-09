
import Image from 'next/image';
import reach from '@/public/reach.jpeg';

export default function Map() {
    return (

        // <div className='relative image-full overflow-hidden'>

        //     <Image src={reach}
        //         alt="Doodle"
        //         className="w-full"
        //     />
        //     <div className="absolute flex bg-white transform -translate-y-1/2 left-5 top-80 ml-delhi">
        //         <p className="text-2xl font-bold">DELHI</p>
        //     </div>

        //     <div className="absolute flex bg-white transform -translate-y-1/2 left-5 top-96 mt-10 ml-hyderabad-l">
        //         <p className="text-2xl font-bold">HYDERABAD</p>
        //     </div>


        // </div>



        <div className="card relative w-full bg-base-100 image-full overflow-hidden rounded-none mt-10">
            <figure><Image
                src={reach}
                alt="Doodle"
                className="w-full"

            /></figure>

            <div className="card-body relative ml-delhi-l mt-delhi-t">
                <p className="">Delhi</p>

            </div>
        </div>

    );
}
