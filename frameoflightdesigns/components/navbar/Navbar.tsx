import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../public/assets/images/Camera-Aperture---Rainbow---Website---Med.png'


export const Navbar = () => {
    return (
        <header className='w-screen h-5 flex items-center flex-wrap'>
            <nav className='fixed top-0 z-50 w-full bg-gradient-to-t from-folpd-reds-dk to-folpd-reds-ruby text-white'>
                <div className='container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap'>
                    <div className='flex w-full text-white md:w-1/2 md:justify-start'>
                        <div style={{ position: "relative", width: "150px", height: "50px" }}>
                            <Link href='/'>
                                <Image src={Logo} layout="fill" objectFit="contain" priority alt=''/>
                            </Link>
                        </div>
                        <div className='hidden flex gap-[40px] md:inline-flex items-center space-x-5' >
                            <div className='flex items-center gap-1 text-white'>
                                <h3>Home</h3>
                                <h3>About Us</h3>
                                <h3>Services</h3>
                                <h3>Contact Us</h3>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center' >
                        <h3>Login</h3>
                    </div>
                </div>
            </nav>
        </header>
    );
};