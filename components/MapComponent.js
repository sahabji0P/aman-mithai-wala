import React from 'react';
import styles from './MapComponent.module.css';
import map from '../public/map.png';
import Image from 'next/image';

const MapComponent = () => {
    return (


        <div>
            <div className={styles.container}>
                <Image src={map} alt="Map" width={1232} height={768} className='relative -z-10 md:w-full' />

                {/* <div className={`${styles.smallContainer} ${styles.one}`}>
                    <div className={styles.mapArrow}>
                        📍
                    </div>
                    <div className={styles.popup}>
                        <h1>Hyderabad</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, debitis pariatur eum reiciendis perspiciatis ab quisquam laboriosam veniam minus ad vero natus delectus quidem quia? Ab eligendi ipsam eum nostrum?</p>
                        <div style={{ maxWidth: '100%', overflow: 'hidden', width: '500px', height: '300px' }}>
                            <div id="hyderabad-google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}

                                    src="https://www.google.com/maps/embed/v1/place?q=aman+mithaiwala+hyderabad&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className={`${styles.smallContainer} ${styles.one}`}>
                    <div className={styles.mapArrow}>📍</div>
                    <div className={styles.popup}>
                        <h1 className='font-bold mb-2'>Hyderabad</h1>
                        <p className=' mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ipsa sed necessitatibus? Nulla, corporis cupiditate, explicabo rerum nemo accusantium nihil eveniet, eaque id dolor aut? Quod numquam est consectetur temporibus.</p>
                        <div style={{ maxWidth: '100%', overflow: 'hidden', width: '500px', height: '300px' }}>
                            <div id="delhi-google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}

                                    src="https://www.google.com/maps/embed/v1/place?q=aman+mithaiwala+hyderabad&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div >

                <div className={`${styles.smallContainer} ${styles.two}`}>
                    <div className={styles.mapArrow}>📍</div>
                    <div className={styles.popup}>
                        <h1 className='font-bold mb-2'>Delhi</h1>
                        <p className=' mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ipsa sed necessitatibus? Nulla, corporis cupiditate, explicabo rerum nemo accusantium nihil eveniet, eaque id dolor aut? Quod numquam est consectetur temporibus.</p>
                        <div style={{ maxWidth: '100%', overflow: 'hidden', width: '500px', height: '300px' }}>
                            <div id="delhi-google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}

                                    src="https://www.google.com/maps/embed/v1/place?q=shree+aman+sweets&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div >

                <div className={`${styles.smallContainer} ${styles.three}`}>
                    <div className={`${styles.mapArrow}`}>

                        📍
                    </div>
                    <div className={styles.popup}>
                        <h1 className='font-bold mb-2'>Punjab</h1>
                        <p className=' mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, debitis pariatur eum reiciendis perspiciatis ab quisquam laboriosam veniam minus ad vero natus delectus quidem quia? Ab eligendi ipsam eum nostrum?</p>
                        <div style={{ maxWidth: '100%', overflow: 'hidden', width: '500px', height: '300px' }}>
                            <div id="hyderabad-google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}

                                    src="https://www.google.com/maps/embed/v1/place?q=aman+mithaiwala+hyderabad&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >


    );
};

export default MapComponent;
