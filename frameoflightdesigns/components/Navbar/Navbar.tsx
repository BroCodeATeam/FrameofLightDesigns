import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import {useRouter} from "next/router";

import {menu} from './MenuItems'

import Logo from '../../public/assets/images/Camera-Aperture---Rainbow---Website---Med.png'


export default function Navbar() {
    const router = useRouter()
    console.log('/' + router.pathname.split('/')[1])

    return (
        <header className='bg-gradient-to-r from-folpd-blues-leftblue via-folpd-greens-ltstgreen to-folpd-greens-rtgreen'>
            <nav className='fixed flex top-0 z-50 w-screen shadow-md shadow-folpd-blues-shirts text-shirts mx-auto'>
                <div className='w-screen h-16 flex items-center justify-between px-8 text-folpd-blues-shirts'>
                    <div className='relative' style={{ width: "200px", height: "125px" }}>
                        <Image src={Logo} alt='Frame of Light Designs Logo' layout="fill" objectFit="contain" priority />
                    </div>

                    <div className='flex items-center text-folpd-blues-shirts p-3'>
                        {menu &&
                            menu.map((item) => (
                                <Link key={item.url} href={item.url}>
                                    <a
                                        className={` ${
                                            item.children &&
                                            item.url === `${'/' + router.pathname.split('/')[1]}`
                                                ? 'bg-blue-500 text-white pt-2 pb-5 px-2 mt-3 rounded-t-md'
                                                : `${
                                                    !item.children &&
                                                    item.url === '/' + router.pathname.split('/')[1]
                                                        ? 'bg-blue-500 text-white p-2 rounded-md'
                                                        : ''
                                                }`
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};