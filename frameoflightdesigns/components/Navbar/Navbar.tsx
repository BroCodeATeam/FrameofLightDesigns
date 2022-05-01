import React from 'react'
import Image from 'next/image'
import MenuItemsList from "./MenuItemsList";
import {MENU_ITEMS} from "../../constants/menu-items";

import Logo from '../../public/assets/images/Camera-Aperture---Rainbow---Website---Med.png'

export default function Navbar() {
    return (
        <header className='w-screen h-10.5 flex items-center flex-wrap'>
            <nav className='fixed top-0 z-50 w-full bg-gradient-to-t from-folpd-reds-dk to-folpd-reds-ruby text-white'>
                <div className='flex w-full text-white md:w-1/2 md:justify-start'>
                    <div style={{ position: "relative", width: "150px", height: "50px" }}>
                        <Image src={Logo} alt='Frame of Light Designs Logo' layout="fill" objectFit="contain" priority />
                    </div>
                    <MenuItemsList  options={MENU_ITEMS}/>
                </div>
            </nav>
        </header>
    );
};