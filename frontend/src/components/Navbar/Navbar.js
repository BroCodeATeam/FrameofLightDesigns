import React, {useState} from 'react'
import {navLinks} from "./navLinks";
import MenuItems from "./MenuItems";

import '../../style/App.css'
import Logo from "../../assets/images/Camera-Aperture---Rainbow---Website---Med.png";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className='relative items-center justify-between px-2 py-3 mb-3 w-full h-auto bg-gradient-to-b from-blue-500 to-blue-900 flex flex-wrap'>
            <div className='container px-4 flex flex-wrap items-center justify-between'>
                <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                <a href='/' className='Logo'>
                    <img src={Logo} alt='Frame of Light Designs Logo'/>
                </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                }
                    id="example-navbar-danger">
                    <ul className="menus flex flex-col lg:flex-row list-none lg:ml-auto">
                        {navLinks.map((menu, index) => {
                            const depthLevel = 0;
                            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;