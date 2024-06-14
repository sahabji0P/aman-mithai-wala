import React from 'react';
import styles from './MapComponent.module.css';
import map from '../public/ITSOK.png';
import map2 from '../public/map2.png';
import Image from 'next/image';

const MapComponent = () => {
    return (
        <div>
            <section id="reach">

            </section>
            <div className={`${styles.container}`}>
                <Image src={map2} alt="Map" width={1232} height={768} className='relative -z-10 md:w-full' />

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
                                {/* <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}
                                    frameBorder="0"
                                    src="https://maps.app.goo.gl/G1jFSZd6hbksYCxUA?g_st=iw"
                                ></iframe> */}

                                <iframe
                                    style={{ height: '100%', width: '100%', border: 0 }}
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3725.22742583886!2d75.58726387525539!3d20.983518780654453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU5JzAwLjciTiA3NcKwMzUnMjMuNCJF!5e0!3m2!1sen!2sin!4v1718365313804!5m2!1sen!2sin"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default MapComponent;