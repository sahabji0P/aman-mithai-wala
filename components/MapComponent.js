import React from 'react';
import styles from './MapComponent.module.css';
import map from '../public/ITSOK.png';
import Image from 'next/image';

const MapComponent = () => {
    return (
        <div>
            <section id="reach">

            </section>
            <div className={`${styles.container}`}>
                <Image src={map} alt="Map" width={1232} height={768} className='relative -z-10 md:w-full' />

                <div className={`${styles.smallContainer} ${styles.one}`}>
                    <div className={styles.mapArrow}>🔴</div>
                    <div className={styles.popup}>
                        <h1 className='font-bold text-2xl'>Hyderabad</h1>
                        <p className='mb-2'>Manufacturing Unit</p>
                        <div style={{ maxWidth: '100%', overflow: 'hidden', width: '100%', height: '100%' }}>
                            <div id="hyderabad-google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}
                                    frameBorder="0"
                                    src="https://www.google.com/maps/embed/v1/place?q=aman+mithaiwala+hyderabad&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                ></iframe>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.smallContainer} ${styles.two}`} onMouseEnter={() => { }}>
                    <div className={`${styles.mapArrow}`}>🔴</div>
                    <div className={`${styles.popup} ${styles.onetab}`}>
                        <h1 className='font-bold text-2xl'>Delhi (Narela)</h1>
                        <p className='mb-2'>Head Office</p>
                        <div style={{ maxWidth: '100%', overflow: 'hidden', width: '100%', height: '100%' }}>
                            <div id="delhi-google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}
                                    frameBorder="0"
                                    src="https://www.google.com/maps/embed/v1/place?q=AMAN+MITHAIWALA+narela&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.popup} ${styles.twotab}`}>
                        <h1 className='font-bold text-2xl'>Delhi (Dilshad Garden)</h1>
                        <p className='mb-2'>Factory Outlet</p>
                        <div style={{ maxWidth: '100%', overflow: 'hidden', width: '100%', height: '100%' }}>
                            <div id="delhi-google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}
                                    frameBorder="0"
                                    src="https://www.google.com/maps/embed/v1/place?q=shree+aman+sweets&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                ></iframe>
                            </div>
                        </div>
                    </div >
                </div >
                <div className={`${styles.smallContainer} ${styles.tel}`}>
                    <div className={styles.mapArrow}>🔴</div>
                    <div className={styles.popup}>
                        <h1 className='font-bold text-2xl'>Maharastra</h1>
                        <p className='mb-2'>Khushi Sweets (Authorised Partner)</p>
                        <div style={{ maxWidth: '100%', overflow: 'hidden', width: '100%', height: '100%' }}>
                            <div id="hyderabad-google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}
                                    frameBorder="0"
                                    src="https://www.google.com/maps/embed/v1/place?q=khushi+sweets+jalgaon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                ></iframe>

                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default MapComponent;