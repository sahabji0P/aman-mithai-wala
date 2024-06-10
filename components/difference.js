

import Image from 'next/image'
import laddos from '../public/bg-laddo.jpg'

export default function Difference() {
    return (

        <div className="card w-full h-96 shadow-xl image-full overflow-hidden mt-1">
            <figure><Image src={laddos} alt="Shoes" className='w-full' /></figure>

            <div className="card-body items-center overflow-x-hidden">

                <h2 className='text-2xl font-bold mb-5 card-title md:text-4xl'>What makes Us Different</h2>

                <div className="flex flex-col item-center justify-between">

                    <div className="carousel carousel-center max-w-6xl p-5 space-x-4 bg-transparent rounded-box" >

                        {/* Edit the Differences here there are 10 repeat after 5 */}

                        <div className="flex overflow-hidden space-x-5 group">
                            <div className="flex space-x-5 animate-loop-scroll group-hover:paused">

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

                                    </div>
                                </div>

                            </div>

                            <div className="flex space-x-5 animate-loop-scroll group-hover:paused" aria-hidden="true">

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

                                    </div>
                                </div>

                                <div className="card w-72 md:w-96 bg-primary text-primary-content mr-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Ladoo!</h2>
                                        <p>If a man chews ladoos, whose ladoos does he choose?</p>

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