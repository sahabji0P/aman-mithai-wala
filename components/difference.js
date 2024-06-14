

import Image from 'next/image'
import laddos from '../public/bg-laddo.jpg'

import d1 from '../public/d1.png'
import d2 from '../public/d2.png'
import d3 from '../public/d3.png'
import d4 from '../public/d4.png'
import d5 from '../public/d5.png'

export default function Difference() {
    return (

        <div className="card w-full h-auto md:c-size shadow-xl image-full overflow-hidden mt-1">
            <section id="difference">
            </section>

            <figure><Image src={laddos} alt="Shoes" className='w-full' /></figure>

            <div className="card-body items-center overflow-x-hidden">

                <h2 data-aos="fade-right" className='text-4xl font-bold mb-5 card-title md:text-5xl playfair_display'>Our Edge</h2>

                <div className="flex flex-col item-center justify-between">

                    <div className="carousel carousel-center max-w-6xl p-5 space-x-4 bg-transparent rounded-box" >

                        {/* Edit the Differences here there are 10 repeat after 5 */}

                        <div className="flex overflow-hidden space-x-5 group">
                            <div className="flex space-x-5 animate-loop-scroll group-hover:paused">

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d1} alt="d1" /></figure>
                                    <div className="card-body jakarta">
                                        {/* <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d1} alt="d1" /> */}

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d2} alt="d2" /></figure>

                                    <div className="card-body">
                                        {/* <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d2} alt="d2" /> */}

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d3} alt="d3" /></figure>

                                    <div className="card-body">
                                        {/* <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d3} alt="d3" /> */}

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d4} alt="d4" /></figure>

                                    <div className="card-body">
                                        {/* <h2 className="card-title">Ladoo!</h2> */}
                                        {/* <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d4} alt="d4" /> */}

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d5} alt="d5" /></figure>

                                    <div className="card-body">
                                        {/* <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d5} alt="d5" /> */}

                                    </div>
                                </div>

                            </div>

                            <div className="flex space-x-5 animate-loop-scroll group-hover:paused" aria-hidden="true">

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d1} alt="d1" /></figure>

                                    <div className="card-body jakarta">
                                        {/* <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d1} alt="d1" /> */}

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d2} alt="d2" /></figure>

                                    <div className="card-body">
                                        {/* <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d2} alt="d2" /> */}

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d3} alt="d3" /></figure>

                                    <div className="card-body">
                                        {/* <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d3} alt="d3" /> */}

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d4} alt="d4" /></figure>

                                    <div className="card-body">
                                        {/* <h2 className="card-title">Ladoo!</h2> */}
                                        {/* <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d4} alt="d4" /> */}

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-transparent text-primary-content mr-3">
                                    <figure><Image src={d5} alt="d5" /></figure>

                                    <div className="card-body">
                                        {/* <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p> */}
                                        {/* <Image src={d5} alt="d5" /> */}

                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>

        // <div className="items-center justify-center flex flex-col mt-1 overflow-hidden" >            

        // </div >



    );
}