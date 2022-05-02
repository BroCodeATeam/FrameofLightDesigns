import React, { Fragment } from 'react'
import Image from 'next/image'

import Logo from '../../public/assets/images/Camera-Aperture---Rainbow---Website---Med.png'


export default function Navbar() {
    return (
        <Fragment>
            <nav className='fixed top-0 z-50 w-full bg-gradient-to-r from-folpd-blues-leftblue via-folpd-greens-ltstgreen to-folpd-greens-rtgreen shadow-lg text-white'>
                <div className='flex w-full text-white md:w-1/2 md:justify-start'>
                    <div style={{ position: "relative", width: "150px", height: "50px" }}>
                        <Image src={Logo} alt='Frame of Light Designs Logo' layout="fill" objectFit="contain" priority />
                    </div>

                    <div>

                    </div>
                </div>
            </nav>
        </Fragment>
    );
};