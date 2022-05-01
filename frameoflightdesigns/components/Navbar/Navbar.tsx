import React from 'react'
import Image from 'next/image'
import MenuItemsList from "./MenuItemsList";
import {MENU_ITEMS} from "../../constants/menu-items";

import Logo from '../../public/assets/images/Camera-Aperture---Rainbow---Website---Med.png'

export default function Navbar() {
    return (
        <div className='w-full h-11 bg-gradient-to-t from-folpd-reds-dk to-folpd-reds-ruby flex flex-no-wrap content-center text-white'>
            <div className='w-8.5 h-11 p-3'>
                <Image src={Logo} alt='Frame of Light Designs Logo' />
            </div>
            <MenuItemsList  options={MENU_ITEMS}/>
        </div>
    );
};