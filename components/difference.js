// export default function Difference() {
//     return (
//         <div className="items-center justify-center flex flex-col border-y-2 border-black dark:border-neutral-800 mt-12 py-12 ">

//             <h2 className='text-4xl font-bold text-center mb-5 text-black'>What makes Us Different</h2>


//             <div className="flex flex-col item-center justify-between">

//                 <div className="carousel carousel-center max-w-2xl p-5 space-x-4 bg-neutral rounded-box" >

//                     <div className="carousel-item">
//                         <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
//                     </div>
//                 </div>
//             </div>

//             {/* <div className="flex flex-col item-center justify-between py-12">
//                 <div className="marquee-container max-w-2xl p-5 space-x-4 bg-neutral rounded-box">

//                     <div className="carousel carousel-center">
//                         <div className="carousel-item">
//                             <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
//                         </div>
//                         <div className="carousel-item">
//                             <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
//                         </div>
//                         <div className="carousel-item">
//                             <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
//                         </div>
//                         <div className="carousel-item">
//                             <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
//                         </div>
//                         <div className="carousel-item">
//                             <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
//                         </div>
//                         <div className="carousel-item">
//                             <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
//                         </div>
//                         <div className="carousel-item">
//                             <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
//                         </div>
//                     </div>

//                 </div>
//             </div> */}
//         </div >


//     );
// }



import doodle from '../public/doodle.jpeg'

import Image from 'next/image'

export default function Vision() {
    return (

        <div className="items-center justify-center flex flex-col mt-1">


            <div className="card w-full h-80 bg-base-100 shadow-xl image-full mb-32">
                <figure><Image src={doodle} alt="Shoes" className='w-full' /></figure>
                <div className="card-body items-center">

                    <h2 className='text-4xl font-bold text-center mb-5 card-title'>What makes Us Different</h2>

                    <div className="flex flex-col item-center justify-between">

                        <div className="carousel carousel-center max-w-2xl p-5 space-x-4 bg-neutral rounded-box" >

                            <div className="carousel-item">
                                <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >


    );
}