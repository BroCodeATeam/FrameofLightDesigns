import React from 'react'
import Link from 'next/link'


export const Navbar = () => {
    return (
        <header className='w-screen h-5 flex items-center flex-wrap py-3'>
            <div className='w-[80%] m-auto flex items-center justify-between space-x-5 mx-auto'>
                <Link href='/'>
                    <img src='../../public/assets/images/Camera-Aperture---Rainbow---Website---Med.png' className='w-44 object-contain cursor-pointer' alt=''/>
                </Link>
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
        </header>
    );
};