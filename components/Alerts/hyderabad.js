import React from 'react';
import styles from '@/components/Alerts/hyderabad.module.css'
import Link from 'next/link';

const MarqueeComponent = () => {
    return (
        <div className={` rounded-xl ${styles.marqueeContainer}`}>
            <div className={styles.marqueeContent}>
                <Link
                    href="https://www.google.com/maps/dir//17.4381046,78.5800323/@17.4381046,78.5774574,17z/data=!4m2!4m1!3e0?entry=ttu"
                    target='_blank'>
                    <h1 className='jakarta'> 🎉 Now we are available in
                        Hyderabad also 🎉 </h1></Link>
            </div>
        </div >
    );
};

export default MarqueeComponent;