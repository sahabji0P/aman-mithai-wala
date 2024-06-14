import { AiOutlineLink, AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Link from 'next/link';

import BusinessIcon from '@mui/icons-material/Business';

import PhoneInput from 'react-phone-input-2'

import { Element } from 'react-scroll';

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default function ContactMe() {
    const form = useRef(null);
    const [disable, setDisable] = useState(false);
    const [status, setStatus] = useState('Submit');


    const submitForm = (e) => {
        e.preventDefault();

        if (validateEmail(form.current?.from_email.value) === null) {
            setStatus('Invalid Email!');
            setTimeout(() => {
                setStatus('Submit');
            }, 3000);
            return;
        }

        setDisable(true);
        setStatus('Sending...');

        if (form.current === null) {
            return;
        }

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStatus('Sent!');
                    form.current.reset();
                },
                (error) => {
                    setStatus('Error!');
                    console.error(error);
                    setTimeout(() => {
                        setStatus('Submit');
                    }, 3000);

                    setDisable(false);
                }
            );
    };

    const [value, setValue] = useState()
    return (

        <>
            <section id='contact'>
            </section>


            <div className='bg-base-300 items-center md:mt-10 md:pt-10 mt-10'>

                <h2 className="pt-8 text-5xl sm:pt-0 playfair_display text-center font-bold">Apply for Distributorship</h2>
            </div>


            <div className="flex flex-col items-center justify-center border-t-2 border-cyan-400 bg-base-300 py-5 text-gray-700 dark:border-0 dark:text-black sm:flex-row">
                <div className="min-w-1/2 flex flex-col justify-center sm:mr-10">

                    {/* <h1 className='text-2xl jakarta font-bold mb-5'>Aman Mithaiwala Pvt. Ltd.</h1> */}

                    <span className="flex items-center mb-1">
                        <Link
                            className="group transition duration-300 jakarta text-2xl font-bold"
                            href="#"
                            rel="noreferrer"
                        >
                            Aman Mithaiwala Pvt. Ltd.
                            <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-neutral"></span>
                        </Link>
                    </span>

                    <span className="flex flex-col items-left pb-4">
                        <p className='font-bold jakarta hover:underline-offset-1'>Head Office:</p>
                        <p className=' jakarta'>E-809, DSIIDC, Narela Industrial Area,</p>
                        <p className=' jakarta'>New Delhi - 110040</p>

                        <span className="flex items-center">
                            <AiOutlineMail className="mr-1 md:mr-2" />
                            <Link
                                href="mailto: sales@amanmithaiwala.com"
                                className="group transition duration-300 jakarta"
                                rel="noreferrer"
                                target="_blank"
                            >
                                sales@amanmithaiwala.com
                                <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-black"></span>
                            </Link>
                        </span>

                        <span className="flex items-center">
                            <AiOutlinePhone className="mr-1 md:mr-2 rotate-90" />
                            <Link
                                href="#"
                                className="group transition duration-300 jakarta"
                                rel="noreferrer"
                            >
                                +91-8800614952
                                <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-black"></span>
                            </Link>
                        </span>
                    </span>

                    <span className="flex flex-col items-left pb-4">

                        <p className='font-bold jakarta hover:underline-offset-1'>Factory Outlet:</p>
                        <p className=' jakarta'>M-19/A-6, M Block, Dilshad Garden,</p>
                        <p className=' jakarta'> Delhi - 110095</p>

                        <span className="flex items-center">
                            <AiOutlinePhone className="mr-1 md:mr-2 rotate-90" />
                            <Link
                                href="#"
                                className="group transition duration-300 jakarta"
                                rel="noreferrer"
                            >
                                +91-9319674090
                                <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-black"></span>
                            </Link>
                        </span>
                    </span>

                    <span className="flex flex-col items-left pb-4">

                        <p className='font-bold jakarta hover:underline-offset-1'>Hyderabad Branch:</p>
                        <p className=' jakarta'>Plot No.43, IDA, Opp. Bharat Electornics Ltd  </p>
                        <p className=' jakarta'>Mallapur, Hyderabad, Telangana - 500076</p>

                        <span className="flex items-center">
                            <AiOutlineMail className="mr-1 md:mr-2" />
                            <Link
                                href="mailto: hyderabad@amanmithaiwala.com"
                                className="group transition duration-300 jakarta"
                                rel="noreferrer"
                                target="_blank"
                            >
                                hyderabad@amanmithaiwala.com
                                <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-black"></span>
                            </Link>
                        </span>

                        <span className="flex items-center">
                            <AiOutlinePhone className="mr-1 md:mr-2 rotate-90" />
                            <Link
                                href="#"
                                className="group transition duration-300 jakarta"
                                rel="noreferrer"
                            >
                                +91-8977754490
                                <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-black"></span>
                            </Link>
                        </span>
                    </span>




                </div>

                <form
                    className="flex w-full flex-col px-10 py-5 pt-10 sm:w-1/2 sm:px-0 sm:pl-10"
                    onSubmit={submitForm}
                    ref={form}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="from_name"
                        required
                        className="mb-2 h-10 max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-white dark:hover:border-gray-700"
                    />

                    <input
                        type="number"
                        placeholder="Your Phone Number"
                        name="from_number"
                        minLength={10}
                        required
                        className="mb-2 h-10 max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-white dark:hover:border-gray-700"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        name="from_email"
                        required
                        className="mb-2 h-10 max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-white dark:hover:border-gray-700"
                    />
                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        name="message"
                        minLength={10}
                        required
                        className="max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-white dark:hover:border-gray-700"
                    />
                    <button
                        type="submit"
                        disabled={disable}
                        className={`btn group relative mt-5 inline-flex h-12 w-40 items-center justify-start overflow-hidden rounded-lg border-2 bg-white text-sm transition-all dark:border-0 dark:bg-gray-900`}
                    >
                        <span
                            className={`-z-1 absolute left-0 top-0 h-0 w-0 rounded ${status === 'Sent!' ? 'bg-green-500 text-white' : 'bg-cyan-600'
                                } transition-all duration-500 ease-out group-hover:h-full group-hover:w-full ${status === 'Sent!' ? 'text-black dark:bg-green-500' : 'dark:bg-cyan-700'
                                }`}
                        ></span>{' '}
                        <span className="z-10 w-full text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-white">
                            {status}
                        </span>
                    </button>
                </form>


            </div>
            <footer className="flex flex-row justify-center items-center bg-gray-800 text-white p-4 text-sm space-x-1 jakarta">
                <p className='text-xs text-balance text-center'>©2024 Aman Mithaiwala Pvt. Ltd |</p>

                <Link href="https://www.instagram.com/web.landers/" target='_blank'>
                    <p className='text-xs text-balance text-center font-semibold'>Powered By WebLanders</p>
                </Link>
            </footer>

        </>
    );
    // Rest of the code remains the same...
}