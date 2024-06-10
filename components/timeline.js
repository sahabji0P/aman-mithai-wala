
export default function TimeLine() {
    return (


        <>

            <section id='Aboutus'></section>

            <div className="my-12 py-2 flex flex-col w-full border-y-2 border-black dark:border-neutral-800 rounded-xl bg-neutral text-white lg:flex-row">

                <div className=" w-full flex flex-col items-center justify-between pt-3 space-x-4">

                    <div className="p-24 pt-4 w-full">
                        <h2 className="text-4xl font-bold text-left ">About Us</h2>
                        {/* Add your About Us content here */}
                        <p className="pt-3">Aman Mithaiwala Pvt. Ltd. is a family-owned business dedicated to preserving the rich heritage of traditional Indian sweets. Established in [Year], we craft authentic and delectable sweets using time-honored recipes and techniques.
                            Our commitment to quality is unwavering, as we source only the finest ingredients, including pure desi ghee, premium nuts, and aromatic spices. Our product range includes iconic delicacies like Bikaneri Barfi, indulgent Kaju Katli, and the beloved Ladoos.
                            For celebrations, our Shaadi/Wedding Bhaji and Ladoos are cherished traditions, adding sweetness to joyous occasions. We also export our Ladoos worldwide, allowing people to savor the authentic flavors of their homeland.
                            At Aman Mithaiwala Pvt. Ltd., our skilled artisans meticulously prepare each sweet with passion and dedication, ensuring every bite is a delightful journey through the flavors of India.</p>
                    </div>
                </div>


                <div className="w-1 bg-base-100 mx-2 hidden rounded-xl lg:block"></div> {/* This is the vertical bar */}

                {/* Horizontal Bar */}
                <hr className="w-full border-t-4 border-base-100 dark:border-base-100 lg:hidden rounded-xl" />


                <div className="w-full flex flex-col md:items-center md:justify-between pt-3">

                    <div className="p-8 pt-4">
                        <h2 className="text-4xl font-bold text-left md:text-center mb-5">Our Jouney</h2>

                        <div className="items-center justify-between font-mono text-sm lg:flex">
                            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
                                <li>
                                    <div className="timeline-middle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>

                                    <div className="timeline-start md:text-end mb-10">
                                        <time className="font-mono italic">2003</time>
                                        <div className="text-lg font-black">Delhi</div>
                                        Store in Delhi
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-end mb-10">
                                        <time className="font-mono italic">2024</time>
                                        <div className="text-lg font-black">Hyderabad</div>
                                        Store in Hyderabad
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-start md:text-end mb-10">
                                        <time className="font-mono italic">2024</time>
                                        <div className="text-lg font-black">Website</div>
                                        Website Launch
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-end mb-10">
                                        <time className="font-mono italic">2024</time>
                                        <div className="text-lg font-black">Foreign</div>
                                        Foreign Branch
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-start md:text-end mb-2">
                                        <time className="font-mono italic">2024</time>
                                        <div className="text-lg font-black">Home Delivery</div>
                                        Home Delivery Service Launch
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>
            </div>


        </>
    );
}